"use client";

import { useState, memo } from "react";
import Link from "next/link";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import type { MapCountry } from "@/data/map-layers";

const GEO_URL = "/data/world-110m.json";

/* ── colors ── */
const LAND = "#2a2a3e";
const LAND_STROKE = "rgba(255,255,255,0.08)";
const OCEAN = "#1a1a2e";

const cyprusAliases = ["Cyprus", "N. Cyprus"];

interface WorldMapProps {
  countries: MapCountry[];
  linkPrefix: string;
}

function WorldMapInner({ countries, linkPrefix }: WorldMapProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  // Build geo lookup: geoName → country config
  const geoCountries = countries.filter((c) => c.type === "geo" && c.geoName);
  const markerCountries = countries.filter((c) => c.type === "marker");

  function getGeoConfig(geoName: string): MapCountry | undefined {
    if (cyprusAliases.includes(geoName)) {
      return geoCountries.find((c) => c.geoName === "Cyprus");
    }
    return geoCountries.find((c) => c.geoName === geoName);
  }

  // Approximate label positions for geo countries
  const labelPositions: Record<string, [number, number]> = {
    "United States of America": [-100, 42],
    Brazil: [-52, -12],
    Portugal: [-8, 39],
    Spain: [-3, 40],
    Greece: [22, 39],
    Cyprus: [33, 35],
    "N. Cyprus": [33, 35],
    Hungary: [19, 47],
    Vanuatu: [167, -16],
    "Costa Rica": [-84, 10],
  };

  return (
    <div className="relative w-full">
      <ComposableMap
        projection="geoNaturalEarth1"
        projectionConfig={{ scale: 160, center: [10, 10] }}
        width={900}
        height={440}
        style={{ width: "100%", height: "auto", maxHeight: 500 }}
      >
        <rect x={0} y={0} width={900} height={440} fill={OCEAN} />

        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const config = getGeoConfig(name);
              const isHighlighted = !!config;
              const isHov = config && hovered === config.slug;

              const fill = isHighlighted
                ? isHov
                  ? config!.hoverColor
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
                      fill: isHighlighted ? config!.hoverColor : "#363650",
                      cursor: isHighlighted ? "pointer" : "default",
                    },
                    pressed: { outline: "none" },
                  }}
                  onMouseEnter={() => config && setHovered(config.slug)}
                  onMouseLeave={() => setHovered(null)}
                />
              );

              return isHighlighted ? (
                <Link
                  key={geo.rsmKey}
                  href={`${linkPrefix}/${config!.slug}`}
                >
                  {geoEl}
                </Link>
              ) : (
                geoEl
              );
            })
          }
        </Geographies>

        {/* Markers for small islands / point locations */}
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
                  r={isHov ? 10 : 7}
                  fill="none"
                  stroke={m.color}
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
                  fill={isHov ? m.hoverColor : m.color}
                  stroke="rgba(255,255,255,0.8)"
                  strokeWidth={0.8}
                  style={{
                    cursor: "pointer",
                    transition: "all 0.2s",
                    filter: isHov
                      ? `drop-shadow(0 0 6px ${m.hoverColor})`
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

        {/* Hover labels for geo countries */}
        {geoCountries.map((c) => {
          if (hovered !== c.slug || !c.geoName) return null;
          const pos = labelPositions[c.geoName];
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
    </div>
  );
}

const WorldMap = memo(WorldMapInner);
export default WorldMap;
