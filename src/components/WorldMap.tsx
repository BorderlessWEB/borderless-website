"use client";

import { useState, memo } from "react";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
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

const MOBILE_MIN_ZOOM = 1;
const MOBILE_MAX_ZOOM = 8;
const MOBILE_INITIAL_ZOOM = 2.2;
const MOBILE_INITIAL_CENTER: [number, number] = [10, 25];

function WorldMapInner({ countries, linkPrefix }: WorldMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);
  const isMobile = useIsMobile();
  const [position, setPosition] = useState<{
    coordinates: [number, number];
    zoom: number;
  }>({ coordinates: MOBILE_INITIAL_CENTER, zoom: MOBILE_INITIAL_ZOOM });
  const [hintDismissed, setHintDismissed] = useState(false);

  function clampZoom(z: number) {
    return Math.max(MOBILE_MIN_ZOOM, Math.min(MOBILE_MAX_ZOOM, z));
  }
  function zoomBy(factor: number) {
    setHintDismissed(true);
    setPosition((p) => ({ ...p, zoom: clampZoom(p.zoom * factor) }));
  }
  function resetZoom() {
    setPosition({
      coordinates: MOBILE_INITIAL_CENTER,
      zoom: MOBILE_INITIAL_ZOOM,
    });
  }

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 200, center: [10, 10] }}
        width={1200}
        height={600}
        style={{
          width: "100%",
          height: "auto",
          touchAction: isMobile ? "none" : undefined,
        }}
      >
        <rect x={0} y={0} width={1200} height={600} fill={OCEAN} />

        {isMobile ? (
          <ZoomableGroup
            zoom={position.zoom}
            center={position.coordinates}
            minZoom={MOBILE_MIN_ZOOM}
            maxZoom={MOBILE_MAX_ZOOM}
            onMoveStart={() => setHintDismissed(true)}
            onMoveEnd={(pos) =>
              setPosition(
                pos as { coordinates: [number, number]; zoom: number }
              )
            }
          >
            <MapBody
              countries={countries}
              linkPrefix={linkPrefix}
              hovered={hovered}
              setHovered={setHovered}
            />
          </ZoomableGroup>
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
