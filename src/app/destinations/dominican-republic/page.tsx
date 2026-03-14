import DestinationPage from "@/components/DestinationPage";
import { destinations } from "@/data/destinations";
import { drFaqs } from "@/data/faqs";

export const metadata = {
  title: "Zaria Eco Retreat \u2014 El Valle, Saman\u00e1, Dominican Republic | NutriCove Retreats",
  description:
    "Nestled in the lush hills of Saman\u00e1. Whale watching, waterfall hikes, horseback riding, and the Zaria Kitchen & Lab. All-inclusive wellness retreat with clinically-guided transformation sessions.",
};

export default function DominicanRepublicPage() {
  const destination = destinations.find((d) => d.slug === "dominican-republic")!;
  return <DestinationPage destination={destination} faqs={drFaqs} />;
}
