"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "🎾 Le padel est-il difficile à apprendre ?",
    answer: "Non, le padel est considéré comme plus facile à apprendre que le tennis. Les règles sont simples, le terrain plus petit, et le jeu est plus intuitif grâce aux murs qui permettent de garder la balle en jeu plus longtemps."
  },
  {
    question: "⚡ Quelles sont les règles de base du padel ?",
    answer: "Le padel se joue en double, avec un service à la cuillère obligatoire. Les points se comptent comme au tennis (15, 30, 40, jeu). La balle peut rebondir une fois au sol et être jouée après avoir touché les vitres. Un match se joue généralement en 2 sets gagnants."
  },
  {
    question: "🎯 Quel équipement faut-il pour jouer au padel ?",
    answer: "Il vous faut une raquette de padel (sans cordage), des balles spécifiques de padel (légèrement moins pressurisées que celles de tennis), et des chaussures de sport adaptées aux terrains synthétiques."
  },
  {
    question: "🏃 Quelle est la durée moyenne d'une partie ?",
    answer: "Une partie de padel dure généralement entre 1h et 1h30. Chez Village Padel, nous proposons des créneaux de 1h30 pour profiter pleinement de votre session."
  },
  {
    question: "💪 Quels sont les bienfaits du padel ?",
    answer: "Le padel est excellent pour la condition physique, la coordination, les réflexes et l'esprit d'équipe. C'est aussi un sport très social qui permet de rencontrer de nouveaux partenaires."
  },
  {
    question: "🌟 Faut-il être un bon joueur de tennis pour jouer au padel ?",
    answer: "Non, pas du tout ! Bien que certaines compétences soient transférables, le padel est un sport distinct avec ses propres techniques. Les débutants peuvent rapidement prendre du plaisir."
  },
  {
    question: "📱 Comment réserver un terrain avec Village Padel ?",
    answer: "Téléchargez notre application Village Padel, créez votre compte, et réservez votre créneau en quelques clics. Vous pouvez choisir votre horaire et payer directement via l'application."
  },
  {
    question: "👥 Peut-on jouer seul au padel ?",
    answer: "Le padel se joue principalement en double (2 contre 2). Si vous n'avez pas de partenaires, utilisez notre application pour trouver d'autres joueurs près de chez vous !"
  },
  {
    question: "💰 Quel est le tarif pour jouer au padel ?",
    answer: "Chez Village Padel, nous proposons des créneaux de 1h30 à 32€. Ce tarif comprend l'accès au terrain et aux installations."
  },
  {
    question: "🌧️ Peut-on jouer au padel quand il pleut ?",
    answer: "Oui, sur nos terrains couverts ! La plupart de nos installations sont protégées des intempéries, permettant de jouer toute l'année."
  }
];

export default function PadelFAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqData.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left">
            {item.question}
          </AccordionTrigger>
          <AccordionContent>
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}