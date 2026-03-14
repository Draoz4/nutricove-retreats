import DestinationPage from "@/components/DestinationPage";
import { destinations } from "@/data/destinations";
import { thailandFaqs } from "@/data/faqs";

export const metadata = {
  title: "Narai Healing Sanctuary \u2014 Koh Samui, Thailand | NutriCove Retreats",
  description:
    "Our flagship retreat on Koh Samui's western coast. Ancient Thai healing arts meet modern therapeutic practice. Private villas, daily yoga, ceremonies, and clinically-guided transformation sessions.",
};

export default function ThailandPage() {
  const destination = destinations.find((d) => d.slug === "thailand")!;
  return <DestinationPage destination={destination} faqs={thailandFaqs} showLeadership />;
}
