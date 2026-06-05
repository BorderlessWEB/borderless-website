"use client";

import { useState, useRef, memo } from "react";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import type { MapCountry } from "@/data/map-layers";
import { useIsMobile } from "@/hooks/useIsMobile";

const GEO_URL = "/data/world-110m.json";

/* ── colors ── */
const LAND = "#2a2a3e";
const LAND_STROKE = "rgba(255,255,255,0.08)";
const OCEAN = "#1a1a2e";
const HOVER_COLOR = "#c87d33"; // brand gold from guideline
const LABEL_COLOR = "rgba(255,255,255,0.7)";
const LABEL_ACTIVE = "#ffffff";
const LINE_COLOR = "rgba(255,255,255,0.2)";
const LINE_ACTIVE = "rgba(200,125,51,0.6)";

const cyprusAliases = ["Cyprus", "N. Cyprus"];

/* ── Label offset configs — pixel offsets in projected SVG coords ── */
interface LabelConfig {
  anchor: [number, number]; // [lng, lat] — where the line starts (near the real location)
  label: [number, number];  // [lng, lat] — where the text label sits
  textAnchor?: "start" | "middle" | "end";
}

/* Smart label positions — especially spreading Caribbean & small islands */
const labelConfigs: Record<string, LabelConfig> = {
  // Caribbean — spread labels to the right
  "st-kitts-and-nevis":  { anchor: [-62.73, 17.36], label: [-42, 22],   textAnchor: "start" },
  "dominica":            { anchor: [-61.37, 15.41], label: [-42, 18],   textAnchor: "start" },
  "antigua-and-barbuda": { anchor: [-61.80, 17.06], label: [-42, 14],   textAnchor: "start" },
  "grenada":             { anchor: [-61.68, 12.12], label: [-42, 10],   textAnchor: "start" },
  "st-lucia":            { anchor: [-60.97, 13.91], label: [-42, 6],    textAnchor: "start" },

  // Africa
  "sao-tome-e-principe": { anchor: [6.61, 0.19],   label: [-8, -8],    textAnchor: "end" },

  // Pacific
  "vanuatu":             { anchor: [167, -16],      label: [175, -26],  textAnchor: "start" },

  // Europe — offset labels to avoid overlap
  "portugal-golden-visa":{ anchor: [-8, 39],        label: [-22, 33],   textAnchor: "end" },
  "portugal-hqa-visa":   { anchor: [-10.5, 38.5],   label: [-22, 29],   textAnchor: "end" },
  "spain":               { anchor: [-3, 40],        label: [-15, 46],   textAnchor: "end" },
  "greece":              { anchor: [22, 39],         label: [15, 33],    textAnchor: "end" },
  "cyprus":              { anchor: [33, 35],         label: [42, 30],    textAnchor: "start" },
  "hungary":             { anchor: [19, 47],         label: [28, 52],    textAnchor: "start" },

  // Americas
  "us-eb5-visa":         { anchor: [-100, 42],      label: [-115, 50],  textAnchor: "end" },
  "brazil":              { anchor: [-52, -12],       label: [-40, -20],  textAnchor: "start" },
  "costa-rica":          { anchor: [-84, 10],        label: [-95, 3],    textAnchor: "end" },
  "azores":              { anchor: [-27.2, 38.7],    label: [-32, 45],   textAnchor: "end" },
};

interface WorldMapProps {
  countries: MapCountry[];
  linkPrefix: string;
}

const VIEW_W = 1200;
const VIEW_H = 600;
const MOBILE_MIN_ZOOM = 1;
const MOBILE_MAX_ZOOM = 8;
const MOBILE_INITIAL_ZOOM = 2.2;
// Focus point in SVG coords for the initial mobile view (Europe/Atlantic-ish)
const MOBILE_FOCUS: [number, number] = [560, 230];

function dist(t1: React.Touch, t2: React.Touch) {
  const dx = t1.clientX - t2.clientX;
  const dy = t1.clientY - t2.clientY;
  return Math.hypot(dx, dy);
}

function WorldMapInner({ countries, linkPrefix }: WorldMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const [hintDismissed, setHintDismissed] = useState(false);

  // SVG transform state: scale + translate (in viewBox units)
  const initialTx = -(MOBILE_FOCUS[0] * (MOBILE_INITIAL_ZOOM - 1));
  const initialTy = -(MOBILE_FOCUS[1] * (MOBILE_INITIAL_ZOOM - 1));
  const [transform, setTransform] = useState({
    scale: MOBILE_INITIAL_ZOOM,
    x: initialTx,
    y: initialTy,
  });

  // gesture refs
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const gesture = useRef<{
    mode: "none" | "pan" | "pinch";
    startX: number;
    startY: number;
    startTx: number;
    startTy: number;
    startDist: number;
    startScale: number;
  }>({
    mode: "none",
    startX: 0,
    startY: 0,
    startTx: 0,
    startTy: 0,
    startDist: 0,
    startScale: 1,
  });

  function clampScale(s: number) {
    return Math.max(MOBILE_MIN_ZOOM, Math.min(MOBILE_MAX_ZOOM, s));
  }

  // px (screen) -> viewBox unit ratio
  function pxToView() {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return 1;
    return VIEW_W / rect.width;
  }

  function clampTranslate(scale: number, x: number, y: number) {
    // keep content covering the viewport
    const minX = -(VIEW_W * (scale - 1));
    const minY = -(VIEH(scale));
    return {
      x: Math.min(0, Math.max(minX, x)),
      y: Math.min(0, Math.max(minY, y)),
    };
    function VIEH(s: number) {
      return VIEW_H * (s - 1);
    }
  }

  // Zoom around the center of the viewport
  function zoomBy(factor: number) {
    setHintDismissed(true);
    setTransform((t) => {
      const newScale = clampScale(t.scale * factor);
      const cx = VIEW_W / 2;
      const cy = VIEW_H / 2;
      // keep viewport center fixed
      const nx = cx - ((cx - t.x) / t.scale) * newScale;
      const ny = cy - ((cy - t.y) / t.scale) * newScale;
      const cl = clampTranslate(newScale, nx, ny);
      return { scale: newScale, x: cl.x, y: cl.y };
    });
  }

  function resetZoom() {
    const cl = clampTranslate(MOBILE_INITIAL_ZOOM, initialTx, initialTy);
    setTransform({ scale: MOBILE_INITIAL_ZOOM, x: cl.x, y: cl.y });
  }

  function onTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    setHintDismissed(true);
    if (e.touches.length === 1) {
      gesture.current = {
        ...gesture.current,
        mode: "pan",
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        startTx: transform.x,
        startTy: transform.y,
      };
    } else if (e.touches.length === 2) {
      gesture.current = {
        ...gesture.current,
        mode: "pinch",
        startDist: dist(e.touches[0], e.touches[1]),
        startScale: transform.scale,
        startX: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        startY: (e.touches[0].clientY + e.touches[1].clientY) / 2,
        startTx: transform.x,
        startTy: transform.y,
      };
    }
  }

  function onTouchMove(e: React.TouchEvent<HTMLDivElement>) {
    const g = gesture.current;
    const ratio = pxToView();
    if (g.mode === "pan" && e.touches.length === 1) {
      const dx = (e.touches[0].clientX - g.startX) * ratio;
      const dy = (e.touches[0].clientY - g.startY) * ratio;
      setTransform((t) => {
        const cl = clampTranslate(t.scale, g.startTx + dx, g.startTy + dy);
        return { ...t, x: cl.x, y: cl.y };
      });
    } else if (g.mode === "pinch" && e.touches.length === 2) {
      const d = dist(e.touches[0], e.touches[1]);
      const factor = d / (g.startDist || d);
      const newScale = clampScale(g.startScale * factor);
      setTransform(() => {
        // zoom around viewport center for simplicity & stability
        const cx = VIEW_W / 2;
        const cy = VIEW_H / 2;
        const nx = cx - ((cx - g.startTx) / g.startScale) * newScale;
        const ny = cy - ((cy - g.startTy) / g.startScale) * newScale;
        const cl = clampTranslate(newScale, nx, ny);
        return { scale: newScale, x: cl.x, y: cl.y };
      });
    }
  }

  function onTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (e.touches.length === 0) {
      gesture.current.mode = "none";
    } else if (e.touches.length === 1) {
      gesture.current = {
        ...gesture.current,
        mode: "pan",
        startX: e.touches[0].clientX,
        startY: e.touches[0].clientY,
        startTx: transform.x,
        startTy: transform.y,
      };
    }
  }

  return (
    <div
      className="relative w-full"
      ref={wrapRef}
      style={{ touchAction: isMobile ? "none" : undefined }}
      onTouchStart={isMobile ? onTouchStart : undefined}
      onTouchMove={isMobile ? onTouchMove : undefined}
      onTouchEnd={isMobile ? onTouchEnd : undefined}
    >
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 200, center: [10, 10] }}
        width={VIEW_W}
        height={VIEW_H}
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <rect x={0} y={0} width={VIEW_W} height={VIEW_H} fill={OCEAN} />

        {isMobile ? (
          <g
            transform={`translate(${transform.x} ${transform.y}) scale(${transform.scale})`}
          >
            <MapBody
              countries={countries}
              linkPrefix={linkPrefix}
              hovered={hovered}
              setHovered={setHovered}
            />
          </g>
        ) : (
          <MapBody
            countries={countries}
            linkPrefix={linkPrefix}
            hovered={hovered}
            setHovered={setHovered}
          />
        )}
      </ComposableMap>

      {/* Mobile zoom controls + hint */}
      {isMobile && (
        <>
          <div className="absolute bottom-4 right-4 flex flex-col gap-2 z-10">
            <button
              type="button"
              aria-label="Zoom in"
              onClick={() => zoomBy(1.6)}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-black/60 backdrop-blur text-white text-2xl leading-none border border-white/20 active:scale-95 transition"
            >
              +
            </button>
            <button
              type="button"
              aria-label="Zoom out"
              onClick={() => zoomBy(1 / 1.6)}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-black/60 backdrop-blur text-white text-2xl leading-none border border-white/20 active:scale-95 transition"
            >
              −
            </button>
            <button
              type="button"
              aria-label="Reset map"
              onClick={resetZoom}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-black/60 backdrop-blur text-white text-base leading-none border border-white/20 active:scale-95 transition"
            >
              ↺
            </button>
          </div>

          {!hintDismissed && (
            <div className="pointer-events-none absolute top-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur text-white/90 text-xs whitespace-nowrap border border-white/15">
              ☝️ Сведите пальцы или тапните +/−, чтобы приблизить карту
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* ── Shared map body (geographies + labels + markers) ── */
interface MapBodyProps {
  countries: MapCountry[];
  linkPrefix: string;
  hovered: string | null;
  setHovered: (slug: string | null) => void;
}

function MapBody({ countries, linkPrefix, hovered, setHovered }: MapBodyProps) {
  const geoCountries = countries.filter((c) => c.type === "geo" && c.geoName);
  const markerCountries = countries.filter((c) => c.type === "marker");

  function getGeoConfig(geoName: string): MapCountry | undefined {
    if (cyprusAliases.includes(geoName)) {
      return geoCountries.find((c) => c.geoName === "Cyprus");
    }
    return geoCountries.find((c) => c.geoName === geoName);
  }

  return (
    <>
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const config = getGeoConfig(name);
              const isHighlighted = !!config;
              const isHov = config && hovered === config.slug;

              const fill = isHighlighted
                ? isHov
                  ? HOVER_COLOR
                  : config!.color
                : LAND;

              const geoEl = (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke={
                    isHighlighted ? "rgba(255,255,255,0.4)" : LAND_STROKE
                  }
                  strokeWidth={isHighlighted ? 0.8 : 0.3}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      outline: "none",
                      fill: isHighlighted ? HOVER_COLOR : "#363650",
                      cursor: isHighlighted ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => config && setHovered(config.slug)}
                  onMouseLeave={() => setHovered(null)}
                />
              );

              return isHighlighted ? (
                <Link key={geo.rsmKey} href={`${linkPrefix}/${config!.slug}`}>
                  {geoEl}
                </Link>
              ) : (
                geoEl
              );
            })
          }
        </Geographies>

        {/* Leader lines + labels via Annotation */}
        {countries.map((c) => {
          const cfg = labelConfigs[c.slug];
          if (!cfg) return null;
          const isHov = hovered === c.slug;

          // Calculate dx/dy as rough offset (label - anchor in degrees, scaled)
          const dx = (cfg.label[0] - cfg.anchor[0]) * 3.5;
          const dy = (cfg.anchor[1] - cfg.label[1]) * 3.5;

          return (
            <Annotation
              key={`ann-${c.slug}`}
              subject={cfg.anchor}
              dx={dx}
              dy={dy}
              connectorProps={{
                stroke: isHov ? LINE_ACTIVE : LINE_COLOR,
                strokeWidth: isHov ? 1 : 0.5,
              }}
            >
              <Link href={`${linkPrefix}/${c.slug}`}>
                <text
                  textAnchor={cfg.textAnchor || "start"}
                  alignmentBaseline="middle"
                  style={{
                    fill: isHov ? LABEL_ACTIVE : LABEL_COLOR,
                    fontSize: isHov ? "8.5px" : "7.5px",
                    fontFamily: "Switzer, sans-serif",
                    fontWeight: isHov ? 700 : 400,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.5px",
                    textShadow: "0 1px 3px rgba(0,0,0,0.8)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={() => setHovered(c.slug)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {c.name}
                </text>
              </Link>
            </Annotation>
          );
        })}

        {/* Marker dots for small islands */}
        {markerCountries.map((m) => {
          if (!m.coordinates) return null;
          const isHov = hovered === m.slug;
          void isHov;

          return (
            <Link key={m.slug} href={`${linkPrefix}/${m.slug}`}>
              <Marker
                coordinates={m.coordinates}
                onMouseEnter={() => setHovered(m.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Pulse ring */}
                <circle
                  r={isHov ? 8 : 5}
                  fill="none"
                  stroke={isHov ? HOVER_COLOR : m.color}
                  strokeWidth={1}
                  opacity={0.4}
                >
                  <animate
                    attributeName="r"
                    values="4;7;4"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.5;0.1;0.5"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Dot */}
                <circle
                  r={isHov ? 4 : 3}
                  fill={isHov ? HOVER_COLOR : m.color}
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth={0.6}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s",
                    filter: isHov
                      ? `drop-shadow(0 0 6px ${HOVER_COLOR})`
                      : "none",
                  }}
                />
              </Marker>
            </Link>
          );
        })}
    </>
  );
}

const WorldMap = memo(WorldMapInner);
export default WorldMap;
