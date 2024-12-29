"use client";

import { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type WeatherData = {
  temperature: number;
  condition: string;
  icon: React.ReactNode;
};

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 20,
    condition: "Ensoleillé",
    icon: <Sun className="h-6 w-6 text-yellow-500" />,
  });

  useEffect(() => {
    // Simulation de données météo
    const mockWeather = {
      temperature: 22,
      condition: "Ensoleillé",
      icon: <Sun className="h-6 w-6 text-yellow-500" />,
    };
    setWeather(mockWeather);
  }, []);

  // Générer les prévisions pour les 7 prochains jours
  const generateForecast = () => {
    return Array.from({ length: 7 }, (_, index) => ({
      day: new Date(Date.now() + (index + 1) * 24 * 60 * 60 * 1000).toLocaleDateString('fr-FR', { weekday: 'short' }),
      temp: Math.round(weather.temperature + (Math.random() * 4 - 2)),
      icon: <Sun className="h-4 w-4 text-yellow-500" />
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4 mb-4">
        {weather.icon}
        <div className="text-3xl font-bold">{weather.temperature}°C</div>
        <div className="text-gray-600">{weather.condition}</div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 w-full text-center text-sm">
        {generateForecast().map((day, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-gray-500 mb-1">{day.day}</div>
            {day.icon}
            <div className="font-medium">{day.temp}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}