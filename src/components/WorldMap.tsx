"use client";

import { useState, memo } from "react";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const GEO_URL = "/data/world-110m.json";

/* ── country config ── */

interface HighlightedCountry {
  slug: string;
  name: string;
  geoName?: string;          // matches properties.name in topojson
  category: "citizenship" | "residency";
}

interface MarkerCountry {
  slug: string;
  name: string;
  coordinates: [number, number]; // [lng, lat]
  category: "citizenship" | "residency";
}

const highlightedCountries: HighlightedCountry[] = [
  { slug: "vanuatu",              name: "Vanuatu",              geoName: "Vanuatu",                     category: "citizenship" },
  { slug: "portugal-golden-visa", name: "Portugal",             geoName: "Portugal",                    category: "residency" },
  { slug: "spain",                name: "Spain",                geoName: "Spain",                       category: "residency" },
  { slug: "greece",               name: "Greece",               geoName: "Greece",                      category: "residency" },
  { slug: "cyprus",               name: "Cyprus",               geoName: "Cyprus",                      category: "residency" },
  { slug: "hungary",              name: "Hungary",              geoName: "Hungary",                     category: "residency" },
  { slug: "us-eb5-visa",          name: "United States",        geoName: "United States of America",    category: "residency" },
  { slug: "brazil",               name: "Brazil",               geoName: "Brazil",                      category: "residency" },
];

// Also match N. Cyprus for Cyprus
const cyprusAliases = ["Cyprus", "N. Cyprus"];

const markerCountries: MarkerCountry[] = [
  { slug: "st-kitts-and-nevis",   name: "St Kitts & Nevis",     coordinates: [-62.73, 17.36],  category: "citizenship" },
  { slug: "dominica",             name: "Dominica",              coordinates: [-61.37, 15.41],  category: "citizenship" },
  { slug: "antigua-and-barbuda",  name: "Antigua & Barbuda",     coordinates: [-61.80, 17.06],  category: "citizenship" },
  { slug: "grenada",              name: "Grenada",               coordinates: [-61.68, 12.12],  category: "citizenship" },
  { slug: "st-lucia",             name: "St Lucia",              coordinates: [-60.97, 13.91],  category: "citizenship" },
  { slug: "sao-tome-e-principe",  name: "São Tomé e Príncipe",   coordinates: [6.61,  0.19],    category: "citizenship" },
  // Portugal marker for HQA (second program on same country)
  { slug: "portugal-hqa-visa",    name: "Portugal HQA",          coordinates: [-10.5, 38.5],    category: "residency" },
];

/* ── colors ── */

const COLORS = {
  citizenship: { base: "#d97706", hover: "#f59e0b" },
  residency:   { base: "#3b82f6", hover: "#60a5fa" },
  land:        "#2a2a3e",
  landStroke:  "rgba(255,255,255,0.08)",
  ocean:       "#1a1a2e",
};

/* ── helpers ── */

function getCountryConfig(geoName: string): HighlightedCountry | undefined {
  // handle Cyprus / N. Cyprus
  if (cyprusAliases.includes(geoName)) {
    return highlightedCountries.find((c) => c.slug === "cyprus");
  }
  return highlightedCountries.find((c) => c.geoName === geoName);
}

/* ── component ── */

function WorldMapInner() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 160, center: [10, 10] }}
        width={900}
        height={440}
        style={{ width: "100%", height: "auto", maxHeight: 500 }}
      >
        <rect x={0} y={0} width={900} height={440} fill={COLORS.ocean} />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const config = getCountryConfig(name);
              const isHighlighted = !!config;
              const isHov = config && hovered === config.slug;
              const colors = config
                ? COLORS[config.category]
                : null;
              const fill = isHighlighted
                ? isHov
                  ? colors!.hover
                  : colors!.base
                : COLORS.land;

              const geoEl = (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={fill}
                  stroke={
                    isHighlighted ? "rgba(255,255,255,0.4)" : COLORS.landStroke
                  }
                  strokeWidth={isHighlighted ? 0.8 : 0.3}
                  style={{
                    default: { outline: "none" },
                    hover: {
                      outline: "none",
                      fill: isHighlighted ? colors!.hover : "#363650",
                      cursor: isHighlighted ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => config && setHovered(config.slug)}
                  onMouseLeave={() => setHovered(null)}
                />
              );

              return isHighlighted ? (
                <Link key={geo.rsmKey} href={`/passport-visas/${config!.slug}`}>
                  {geoEl}
                </Link>
              ) : (
                geoEl
              );
            })
          }
        </Geographies>

        {/* Markers for small islands + second Portugal program */}
        {markerCountries.map((m) => {
          const isHov = hovered === m.slug;
          const colors = COLORS[m.category];

          return (
            <Link key={m.slug} href={`/passport-visas/${m.slug}`}>
              <Marker
                coordinates={m.coordinates}
                onMouseEnter={() => setHovered(m.slug)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Pulse ring */}
                <circle
                  r={isHov ? 10 : 7}
                  fill="none"
                  stroke={colors.base}
                  strokeWidth={1}
                  opacity={0.4}
                >
                  <animate
                    attributeName="r"
                    values="5;9;5"
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
                  r={isHov ? 5 : 3.5}
                  fill={isHov ? colors.hover : colors.base}
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth={0.8}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s",
                    filter: isHov
                      ? `drop-shadow(0 0 6px ${colors.hover})`
                      : "none",
                  }}
                />

                {/* Label on hover */}
                {isHov && (
                  <text
                    textAnchor="middle"
                    y={-12}
                    style={{
                      fill: "white",
                      fontSize: "8px",
                      fontWeight: 600,
                      textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                      pointerEvents: "none",
                    }}
                  >
                    {m.name}
                  </text>
                )}
              </Marker>
            </Link>
          );
        })}

        {/* Hover labels for large countries */}
        {highlightedCountries.map((c) => {
          if (hovered !== c.slug) return null;
          // Approximate label positions
          const labelPositions: Record<string, [number, number]> = {
            "us-eb5-visa":          [-100, 42],
            brazil:                 [-52, -12],
            "portugal-golden-visa": [-8, 39],
            spain:                  [-3, 40],
            greece:                 [22, 39],
            cyprus:                 [33, 35],
            hungary:                [19, 47],
            vanuatu:                [167, -16],
          };
          const pos = labelPositions[c.slug];
          if (!pos) return null;
          return (
            <Marker key={`label-${c.slug}`} coordinates={pos}>
              <text
                textAnchor="middle"
                y={-2}
                style={{
                  fill: "white",
                  fontSize: "9px",
                  fontWeight: 600,
                  textShadow: "0 1px 4px rgba(0,0,0,0.9)",
                  pointerEvents: "none",
                }}
              >
                {c.name}
              </text>
            </Marker>
          );
        })}
      </ComposableMap>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-3 ml-1">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ backgroundColor: COLORS.citizenship.base }}
          />
          <span className="f-body text-white/60 text-sm">Citizenship</span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-sm inline-block"
            style={{ backgroundColor: COLORS.residency.base }}
          />
          <span className="f-body text-white/60 text-sm">Residency</span>
        </div>
      </div>
    </div>
  );
}

const WorldMap = memo(WorldMapInner);
export default WorldMap;
