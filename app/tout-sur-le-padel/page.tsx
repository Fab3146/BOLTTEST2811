import Image from "next/image";
import PadelFAQ from "@/components/padel-faq";
import { ComparisonTable } from "@/components/padel/sections/comparison-table";
import { BookingCard } from "@/components/padel/sections/booking-card";

export default function ToutSurLePadelPage() {
  return (
    <div className="flex flex-col min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=2070&auto=format&fit=crop"
          alt="Terrain de Padel"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Découvrez le Padel</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Un sport passionnant qui combine les meilleurs aspects du tennis et du squash
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#0A3778] mb-6">Qu'est-ce que le Padel ?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Le padel est un sport de raquette qui se joue en double sur un terrain encadré de vitres et de grillages. 
              Né au Mexique dans les années 1960, il connaît aujourd'hui un succès grandissant en Europe, particulièrement 
              en Espagne et en France.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Ce sport unique combine des éléments du tennis et du squash, offrant une expérience de jeu dynamique et 
              accessible à tous les niveaux.
            </p>
          </div>

          <ComparisonTable />
          <BookingCard />

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0A3778] mb-6">Questions Fréquentes</h2>
            <PadelFAQ />
          </div>
        </div>
      </section>
    </div>
  );
}