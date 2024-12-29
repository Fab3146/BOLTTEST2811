import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function BookingCard() {
  return (
    <Card className="bg-gradient-to-r from-[#0A3778] to-blue-600 text-white mb-16">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-4">Réservez votre session de Padel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Informations pratiques :</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Durée : 1h30 par session</li>
              <li>Tarif : 32€ par créneau</li>
              <li>Réservation simple via l'application Village Padel</li>
              <li>Matériel disponible sur place</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="mb-4">
              Téléchargez l'application Village Padel pour réserver votre créneau en quelques clics !
            </p>
            <div className="flex gap-4">
              <a href="https://apps.apple.com/fr/app/village-padel/id6504023084" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">App Store</Button>
              </a>
              <a href="https://apps.apple.com/fr/app/village-padel/id6504023084" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary">Google Play</Button>
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}