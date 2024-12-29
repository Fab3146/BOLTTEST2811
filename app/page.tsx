import { HeroSection } from "@/components/sections/hero-section";
import { AutomationSection } from "@/components/sections/automation-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Users, Calendar, Trophy, Smartphone, Lock, Settings, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Technical Offer Section */}
      <section id="solution" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#0A3778] mb-12">
            Notre Offre Technique
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Application Mobile"
              description="Réservation et accès autonome aux terrains via notre application intuitive"
            />
            <FeatureCard
              icon={<Lock className="h-8 w-8" />}
              title="Location Sécurisée"
              description="Accédez au matériel (raquettes et balles) directement via l'application"
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8" />}
              title="Solution Adaptée"
              description="Flexible et sécurisée, conçue pour les besoins des clubs de tennis et de padel"
            />
          </div>
        </div>
      </section>

      {/* Automation Section */}
      <AutomationSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A3778] text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Contactez-nous</h2>
          <p className="text-lg mb-8">
            Vous souhaitez en savoir plus sur nos solutions ? N'hésitez pas à nous contacter !
          </p>
          <a href="mailto:contact@villagepadel.fr">
            <Button variant="secondary" size="lg">
              Envoyez-nous un email
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 text-[#0A3778]">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}