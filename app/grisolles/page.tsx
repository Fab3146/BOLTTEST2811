import Image from "next/image";
import { MapPin, Calendar, Users, Home } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WeatherWidget from "@/components/weather-widget";

export default function GrisollesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Padel à Grisolles</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Découvrez notre nouveau terrain de padel, un espace moderne pour pratiquer et partager votre passion
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Location Card */}
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#0A3778] mb-6">Localisation</h2>
                <div className="aspect-video relative bg-gray-100 rounded-lg mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.7276851565437!2d1.2921491!3d43.8291306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ac6b76cb0e4487%3A0x406f69c2f3d95d0!2sGrisolles!5e0!3m2!1sfr!2sfr!4v1650000000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>82170 Grisolles</span>
                </div>
                <a href="https://maps.app.goo.gl/YpomqnhRB2s79oM29" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#0A3778] hover:bg-[#0A3778]/90">
                    Ouvrir dans Google Maps
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Weather Card */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-[#0A3778] mb-6">Météo à Grisolles</h2>
                <WeatherWidget />
              </CardContent>
            </Card>
          </div>

          {/* Facilities Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#0A3778] mb-8 text-center">Nos Installations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Home className="h-12 w-12 mx-auto mb-4 text-[#0A3778]" />
                  <h3 className="text-xl font-semibold mb-2">Club House</h3>
                  <p className="text-gray-600">Accès prochain au club house pour des moments conviviaux après vos matchs</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-[#0A3778]" />
                  <h3 className="text-xl font-semibold mb-2">Réservation Simple</h3>
                  <p className="text-gray-600">Réservez votre créneau en quelques clics via notre application</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-[#0A3778]" />
                  <h3 className="text-xl font-semibold mb-2">Communauté</h3>
                  <p className="text-gray-600">Rejoignez une communauté passionnée de joueurs de padel</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Thanks Section */}
          <Card className="mb-16 bg-gradient-to-r from-[#0A3778] to-blue-600 text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Remerciements</h2>
              <p className="text-lg mb-4">
                Un grand merci à Clément Pommared, président du Tennis Club, et à la mairie de Grisolles pour leur confiance
                et leur soutien dans la réalisation de ce projet.
              </p>
              <p className="text-sm opacity-90">
                Ensemble, nous contribuons au développement du padel dans notre région.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Réservez dès maintenant</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://apps.apple.com/fr/app/village-padel/id6504023084" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-black hover:bg-black/90">
                  App Store
                </Button>
              </a>
              <a href="https://apps.apple.com/fr/app/village-padel/id6504023084" target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-[#0A3778] hover:bg-[#0A3778]/90">
                  Google Play
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}