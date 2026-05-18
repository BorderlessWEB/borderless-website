import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Travel — BORDERLESS",
  description:
    "Curated journeys and educational trips for families who explore the world through geography and history.",
};

const trips = [
  {
    destination: "Portugal & Azores",
    type: "Family Educational",
    duration: "10 days",
    description:
      "Explore the history of maritime discoveries, volcanic landscapes, and modern European culture with your family.",
  },
  {
    destination: "Japan",
    type: "Cultural Immersion",
    duration: "14 days",
    description:
      "From ancient temples to cutting-edge technology — a journey through centuries of tradition and innovation.",
  },
  {
    destination: "Costa Rica",
    type: "Eco-Adventure",
    duration: "12 days",
    description:
      "Rainforests, volcanoes, and sustainable communities — experience the country that runs on renewable energy.",
  },
  {
    destination: "Greece & Islands",
    type: "History & Leisure",
    duration: "10 days",
    description:
      "Walk where democracy was born. Ancient ruins, island-hopping, and Mediterranean lifestyle at its finest.",
  },
  {
    destination: "Iceland",
    type: "Nature & Science",
    duration: "8 days",
    description:
      "Northern lights, geothermal wonders, and geological marvels — a living classroom of Earth science.",
  },
  {
    destination: "UAE & Oman",
    type: "Modern & Traditional",
    duration: "9 days",
    description:
      "Futuristic cities meet ancient desert culture. Business, architecture, and the crossroads of civilizations.",
  },
];

export default function TravelPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-teal text-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6">
            Travel
          </h1>
          <p className="text-xl lg:text-2xl text-white/80 max-w-3xl leading-relaxed">
            Curated journeys and educational trips for families who explore the
            world through geography and history — inspiring destinations and
            immersive experiences with meaning.
          </p>
        </div>
      </section>

      {/* Trips */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Upcoming Journeys"
            subtitle="Each trip is designed to inspire, educate, and create lasting memories."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <div
                key={trip.destination}
                className="group bg-white border border-gray-light rounded-2xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="bg-teal/10 h-48 flex items-center justify-center">
                  <span className="text-6xl">🌍</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal bg-teal/10 px-2 py-1 rounded">
                      {trip.type}
                    </span>
                    <span className="text-xs text-gray-dark">
                      {trip.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-dark mb-2">
                    {trip.destination}
                  </h3>
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {trip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        variant="teal"
        title="Plan Your Next Adventure"
        description="Tell us about your family's interests and we'll create a tailor-made journey."
        buttonText="Start Planning"
      />
    </>
  );
}
