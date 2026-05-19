"use client";

import { useState } from "react";
import Link from "next/link";

interface CountryData {
  slug: string;
  name: string;
  path: string;
  labelX: number;
  labelY: number;
  category: "citizenship" | "residency";
}

const countries: CountryData[] = [
  // === CITIZENSHIP (Caribbean + Africa + Pacific) ===
  {
    slug: "st-kitts-and-nevis",
    name: "St Kitts & Nevis",
    category: "citizenship",
    path: "M272,198 l2,0 l1,2 l-2,1 l-1,-1 z",
    labelX: 258,
    labelY: 190,
  },
  {
    slug: "dominica",
    name: "Dominica",
    category: "citizenship",
    path: "M276,205 l2,0 l1,2 l-1,2 l-2,-1 z",
    labelX: 262,
    labelY: 207,
  },
  {
    slug: "antigua-and-barbuda",
    name: "Antigua & Barbuda",
    category: "citizenship",
    path: "M275,199 l2,0 l1,1 l-1,2 l-2,-1 z",
    labelX: 282,
    labelY: 196,
  },
  {
    slug: "grenada",
    name: "Grenada",
    category: "citizenship",
    path: "M276,215 l2,0 l0,2 l-2,1 l-1,-1 z",
    labelX: 264,
    labelY: 220,
  },
  {
    slug: "st-lucia",
    name: "St Lucia",
    category: "citizenship",
    path: "M277,209 l2,0 l0,2 l-2,1 l-1,-1 z",
    labelX: 284,
    labelY: 210,
  },
  {
    slug: "sao-tome-e-principe",
    name: "São Tomé e Príncipe",
    category: "citizenship",
    path: "M458,270 l3,0 l1,3 l-3,1 l-2,-2 z",
    labelX: 440,
    labelY: 265,
  },
  {
    slug: "vanuatu",
    name: "Vanuatu",
    category: "citizenship",
    path: "M870,300 l2,1 l1,4 l-2,2 l-2,-3 z",
    labelX: 855,
    labelY: 295,
  },
  // === RESIDENCY (Europe + Americas) ===
  {
    slug: "portugal-golden-visa",
    name: "Portugal",
    category: "residency",
    path: "M430,163 l4,0 l1,10 l-4,2 l-2,-6 z",
    labelX: 418,
    labelY: 158,
  },
  {
    slug: "spain",
    name: "Spain",
    category: "residency",
    path: "M436,157 l16,0 l2,12 l-15,4 l-4,-10 z",
    labelX: 440,
    labelY: 165,
  },
  {
    slug: "greece",
    name: "Greece",
    category: "residency",
    path: "M500,160 l8,-2 l4,8 l-3,6 l-7,-2 l-3,-6 z",
    labelX: 498,
    labelY: 170,
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    category: "residency",
    path: "M527,172 l5,0 l1,3 l-5,1 l-2,-2 z",
    labelX: 524,
    labelY: 168,
  },
  {
    slug: "hungary",
    name: "Hungary",
    category: "residency",
    path: "M487,140 l10,0 l1,6 l-10,1 l-2,-4 z",
    labelX: 486,
    labelY: 137,
  },
  {
    slug: "us-eb5-visa",
    name: "United States",
    category: "residency",
    path: "M120,120 l100,0 l10,40 l-20,20 l-80,0 l-20,-30 z",
    labelX: 160,
    labelY: 148,
  },
  {
    slug: "brazil",
    name: "Brazil",
    category: "residency",
    path: "M280,260 l50,0 l20,40 l-10,30 l-40,10 l-30,-20 l-10,-40 z",
    labelX: 300,
    labelY: 290,
  },
];

// Simplified world map background paths
const continentPaths = {
  northAmerica:
    "M60,50 L80,30 L120,20 L170,25 L220,50 L240,80 L250,120 L240,160 L220,180 L200,190 L160,195 L130,190 L100,180 L80,160 L60,130 L50,100 L55,70 Z",
  centralAmerica:
    "M160,195 L180,200 L200,210 L220,220 L230,230 L240,240 L250,235 L255,225 L248,215 L240,200 L230,190 L220,185 L200,190 Z",
  southAmerica:
    "M250,235 L270,225 L290,230 L320,240 L340,260 L350,290 L340,330 L320,360 L300,380 L280,375 L265,350 L255,320 L245,290 L240,260 Z",
  europe:
    "M430,60 L450,50 L470,45 L490,50 L510,55 L530,60 L540,70 L530,90 L540,100 L550,110 L540,120 L520,130 L510,140 L500,150 L490,155 L470,150 L460,145 L450,140 L440,135 L435,120 L430,100 L425,80 Z",
  uk: "M435,80 L442,75 L445,85 L440,95 L433,90 Z",
  scandinavia: "M470,30 L480,20 L495,25 L500,40 L490,55 L475,50 L468,40 Z",
  africa:
    "M440,185 L460,175 L490,180 L520,185 L550,195 L560,220 L555,260 L540,290 L520,310 L500,320 L480,315 L460,300 L445,275 L435,250 L430,220 L435,200 Z",
  middleEast:
    "M530,155 L560,150 L580,160 L590,180 L575,195 L555,195 L540,185 L530,175 Z",
  centralAsia:
    "M560,100 L600,90 L640,85 L680,90 L700,100 L690,120 L660,130 L620,135 L580,130 L560,120 Z",
  southAsia:
    "M620,150 L650,140 L680,150 L690,170 L680,190 L660,200 L640,195 L620,185 L610,170 Z",
  eastAsia:
    "M700,80 L730,70 L760,80 L780,100 L790,130 L780,150 L760,160 L730,165 L710,155 L700,135 L695,110 Z",
  southeastAsia:
    "M720,180 L750,170 L770,180 L780,200 L770,220 L750,230 L730,225 L715,210 L710,195 Z",
  japan: "M790,110 L798,105 L802,115 L800,130 L793,125 L788,118 Z",
  oceania:
    "M760,280 L810,270 L850,280 L870,300 L860,330 L830,350 L790,345 L765,325 L755,300 Z",
  newZealand: "M870,350 L878,345 L882,355 L880,370 L873,365 L868,358 Z",
  russia:
    "M500,40 L540,30 L580,25 L630,30 L680,35 L720,45 L760,50 L790,55 L800,65 L790,80 L760,75 L720,70 L680,65 L640,60 L600,55 L560,50 L530,50 L510,45 Z",
  greenland: "M290,15 L330,10 L355,20 L350,45 L325,55 L300,45 L285,30 Z",
  madagascar: "M565,305 L572,300 L576,310 L573,320 L567,318 Z",
};

export default function WorldMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    name: string;
  } | null>(null);

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 920 420"
        className="w-full h-auto"
        style={{ maxHeight: "500px" }}
      >
        {/* Ocean background */}
        <rect width="920" height="420" fill="#1a1a2e" rx="8" />

        {/* Grid lines */}
        {[...Array(19)].map((_, i) => (
          <line
            key={`vg-${i}`}
            x1={i * 50}
            y1={0}
            x2={i * 50}
            y2={420}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.5"
          />
        ))}
        {[...Array(9)].map((_, i) => (
          <line
            key={`hg-${i}`}
            x1={0}
            y1={i * 50}
            x2={920}
            y2={i * 50}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="0.5"
          />
        ))}

        {/* Continents — base layer */}
        {Object.entries(continentPaths).map(([key, d]) => (
          <path
            key={key}
            d={d}
            fill="#2a2a3e"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.5"
          />
        ))}

        {/* Highlighted countries */}
        {countries.map((c) => {
          const isHovered = hoveredCountry === c.slug;
          const fillColor =
            c.category === "citizenship"
              ? isHovered
                ? "#f59e0b"
                : "#d97706"
              : isHovered
                ? "#60a5fa"
                : "#3b82f6";

          return (
            <Link key={c.slug} href={`/passport-visas/${c.slug}`}>
              <path
                d={c.path}
                fill={fillColor}
                stroke="rgba(255,255,255,0.6)"
                strokeWidth={isHovered ? "1.5" : "0.8"}
                className="cursor-pointer transition-all duration-200"
                style={{
                  filter: isHovered
                    ? `drop-shadow(0 0 8px ${fillColor})`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  setHoveredCountry(c.slug);
                  const svg = e.currentTarget.ownerSVGElement;
                  if (svg) {
                    const pt = svg.createSVGPoint();
                    pt.x = c.labelX;
                    pt.y = c.labelY;
                    const screenPt = pt.matrixTransform(
                      svg.getScreenCTM() || undefined
                    );
                    setTooltip({
                      x: screenPt.x,
                      y: screenPt.y,
                      name: c.name,
                    });
                  }
                }}
                onMouseLeave={() => {
                  setHoveredCountry(null);
                  setTooltip(null);
                }}
              />
            </Link>
          );
        })}

        {/* Country markers / dots for small countries */}
        {countries.map((c) => {
          const isHovered = hoveredCountry === c.slug;
          const color =
            c.category === "citizenship" ? "#d97706" : "#3b82f6";

          // Only show pulsing dot for small island nations
          const isSmall = [
            "st-kitts-and-nevis",
            "dominica",
            "antigua-and-barbuda",
            "grenada",
            "st-lucia",
            "sao-tome-e-principe",
            "vanuatu",
            "cyprus",
          ].includes(c.slug);

          if (!isSmall) return null;

          return (
            <Link key={`dot-${c.slug}`} href={`/passport-visas/${c.slug}`}>
              <circle
                cx={c.labelX + 10}
                cy={c.labelY + 5}
                r={isHovered ? 6 : 4}
                fill={color}
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="1"
                className="cursor-pointer"
                onMouseEnter={() => setHoveredCountry(c.slug)}
                onMouseLeave={() => {
                  setHoveredCountry(null);
                  setTooltip(null);
                }}
              >
                <animate
                  attributeName="r"
                  values="3;5;3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </Link>
          );
        })}

        {/* Labels for highlighted countries */}
        {countries.map((c) => {
          const isHovered = hoveredCountry === c.slug;
          if (!isHovered) return null;
          return (
            <text
              key={`label-${c.slug}`}
              x={c.labelX}
              y={c.labelY - 8}
              fill="white"
              fontSize="9"
              fontWeight="600"
              textAnchor="middle"
              className="pointer-events-none"
              style={{
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
              }}
            >
              {c.name}
            </text>
          );
        })}

        {/* Legend */}
        <g transform="translate(20, 380)">
          <rect width="12" height="12" rx="2" fill="#d97706" />
          <text x="18" y="10" fill="rgba(255,255,255,0.7)" fontSize="9">
            Citizenship
          </text>
          <rect x="100" width="12" height="12" rx="2" fill="#3b82f6" />
          <text x="118" y="10" fill="rgba(255,255,255,0.7)" fontSize="9">
            Residency
          </text>
        </g>
      </svg>
    </div>
  );
}
