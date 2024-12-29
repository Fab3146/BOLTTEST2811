"use client";

import Image from "next/image";
import { Settings, Lock, Shield } from "lucide-react";

export function AutomationSection() {
  return (
    <section id="automatisation" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=1470&auto=format&fit=crop"
              alt="Automatisation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0A3778] mb-8">
              Notre Solution d'Automatisation
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-[#0A3778]">
                  <Settings className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Gestion d'accès autonome</h3>
                  <p className="text-gray-600">Accédez aux terrains et au matériel en toute autonomie via l'application</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#0A3778]">
                  <Lock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Installation simple</h3>
                  <p className="text-gray-600">Solution adaptée aux infrastructures existantes des clubs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-[#0A3778]">
                  <Shield className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Support continu</h3>
                  <p className="text-gray-600">Accompagnement technique pour une expérience optimale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}