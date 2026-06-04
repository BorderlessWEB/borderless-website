"use client";

import { useState, memo } from "react";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
} from "react-simple-maps";
import type { MapCountry } from "@/data/map-layers";

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

function WorldMapInner({ countries, linkPrefix }: WorldMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  const geoCountries = countries.filter((c) => c.type === "geo" && c.geoName);
  const markerCountries = countries.filter((c) => c.type === "marker");

  function getGeoConfig(geoName: string): MapCountry | undefined {
    if (cyprusAliases.includes(geoName)) {
      return geoCountries.find((c) => c.geoName === "Cyprus");
    }
    return geoCountries.find((c) => c.geoName === geoName);
  }

  // Get coordinates for a country (marker coords or label config anchor)
  function getCountryCoords(c: MapCountry): [number, number] | null {
    if (c.coordinates) return c.coordinates;
    const cfg = labelConfigs[c.slug];
    if (cfg) return cfg.anchor;
    return null;
  }

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 200, center: [10, 10] }}
        width={1200}
        height={600}
        style={{ width: "100%", height: "auto" }}
      >
        <rect x={0} y={0} width={1200} height={600} fill={OCEAN} />

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


      </ComposableMap>
    </div>
  );
}

const WorldMap = memo(WorldMapInner);
export default WorldMap;
