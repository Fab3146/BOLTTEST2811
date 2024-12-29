"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#0A3778] mb-6">
              Découvrez le Padel avec Village Padel
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Une solution unique pour le développement du padel en France. Installation gratuite, gestion automatisée et accès simplifié pour tous.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="https://apps.apple.com/fr/app/village-padel/id6504023084" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-black hover:bg-black/90">
                  <Download className="mr-2 h-4 w-4" />
                  App Store
                </Button>
              </a>
              <a href="https://apps.apple.com/fr/app/village-padel/id6504023084" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-[#0A3778] hover:bg-[#0A3778]/90">
                  <Download className="mr-2 h-4 w-4" />
                  Google Play
                </Button>
              </a>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1630685208858-d0a905e2e765?q=80&w=2532&auto=format&fit=crop"
              alt="Joueurs de Padel en action"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}