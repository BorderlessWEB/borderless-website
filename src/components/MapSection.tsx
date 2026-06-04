"use client";

import { useState } from "react";
import WorldMap from "./WorldMap";
import { mapLayers, type MapTab } from "@/data/map-layers";

const tabs: { key: MapTab; label: string }[] = [
  { key: "passport-visas", label: "Passport/visas" },
  { key: "travel", label: "Travel" },
  { key: "investment", label: "Investment" },
  { key: "education", label: "Education" },

];

export default function MapSection() {
  const [activeTab, setActiveTab] = useState<MapTab>("passport-visas");
  const layer = mapLayers.find((l) => l.tab === activeTab) || mapLayers[0];

  return (
    <section className="bg-[#eeeeee]">
      <div className="max-w-[1196px] mx-auto py-10 lg:py-16 content-px">
        {/* Tabs */}
        <div className="flex gap-3 lg:gap-6 mb-4 lg:mb-8 overflow-x-auto no-scrollbar pb-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`f-nav whitespace-nowrap pb-2 transition-colors ${
                activeTab === t.key
                  ? "f-nav-active border-b-[3px] border-black text-black"
                  : "text-black/40 hover:text-black/60"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Map */}
        <div className="rounded overflow-hidden bg-[#1a1a2e] p-4 lg:p-6">
          {layer.countries.length > 0 ? (
            <WorldMap
              countries={layer.countries}
              linkPrefix={layer.linkPrefix}
            />
          ) : (
            <div className="flex items-center justify-center min-h-[300px]">
              <p className="text-white/40 f-body">
                Locations coming soon
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
