import { Destination } from "@/types";

export const destinations: Destination[] = [
  {
    slug: "thailand",
    name: "Koh Samui, Thailand",
    resortName: "Narai Healing Sanctuary",
    location: "Lipa Noi, Koh Samui \u2014 Thailand",
    country: "Thailand",
    badge: "Flagship",
    heroImage: "/images/thailand/hero.png",
    description:
      "Our flagship retreat on Koh Samui\u2019s tranquil western coast. Ancient Thai healing arts meet modern therapeutic practice \u2014 sunrise yoga on white sand, traditional Nuad Boran massage, sacred herbal steam ceremonies, Buddhist temple excursions, and evening beach rituals under the palms. Lipa Noi is the quiet side of the island \u2014 far from the tourist strip, close to the soul of Thailand.",
    highlights: [
      "Beachfront",
      "Thai Healing Arts",
      "Ceremony Temple",
      "Full Spa & Sauna",
      "Meditation Gardens",
      "Organic Garden Kitchen",
    ],
    accommodations: [
      {
        name: "Private Villas",
        capacity: "Up to 2 guests",
        description:
          "Self-contained private villas with king bed, kitchen, living room, and private bathroom. Garden or ocean views.",
        amenities: ["King bed", "Kitchen", "Living room", "Private bathroom", "Air conditioning", "Garden views"],
        image: "/images/thailand/villa.png",
      },
      {
        name: "Oceanfront Homes",
        capacity: "Up to 2 guests (Premium)",
        description:
          "Premium beachfront villas with direct ocean access. The most exclusive accommodation at Narai.",
        amenities: ["King bed", "Full kitchen", "Living room", "Private bathroom", "Air conditioning", "Ocean views", "Direct beach access"],
        image: "/images/thailand/oceanfront.png",
      },
    ],
    activities: [
      { name: "Sunrise Beach Meditation" },
      { name: "Temple Excursions" },
      { name: "Thai Herbal Workshops" },
      { name: "Waterfall Hikes" },
      { name: "Muay Thai" },
      { name: "Thai Massage" },
      { name: "Herbal Steam Ceremonies" },
      { name: "Snorkeling" },
      { name: "Kayaking" },
      { name: "Cooking Classes" },
      { name: "Monk Chats" },
      { name: "Contrast Therapy" },
    ],
    gallery: [
      "/images/thailand/hero.png",
      "/images/thailand/villa.png",
      "/images/thailand/oceanfront.png",
      "/images/thailand/yoga.png",
      "/images/thailand/dining.png",
    ],
  },
  {
    slug: "dominican-republic",
    name: "El Valle, Saman\u00e1 \u2014 Dominican Republic",
    resortName: "Zaria Eco Retreat",
    location: "El Valle, Saman\u00e1 \u2014 Dominican Republic",
    country: "Dominican Republic",
    badge: "Now Open",
    heroImage: "/images/zaria/hero-aerial-pool.jpg",
    description:
      "Nestled in the lush hills of El Valle, Saman\u00e1. Walking distance to pristine Caribbean beaches. Located on El Valle road, km 7.5. Whale watching from January through March, waterfall hikes through tropical jungle, horseback riding along coastal trails, zipline canopy tours, coffee and cacao route excursions, boat rides to Playa Ermita\u00f1o. The Zaria Kitchen & Lab hosts guest chefs for unique culinary experiences.",
    highlights: [
      "Jungle & Beach",
      "Whale Watching",
      "Waterfall Tours",
      "Horseback Riding",
      "Coffee & Cacao Routes",
      "All-Inclusive Kitchen",
    ],
    accommodations: [
      {
        name: "Deluxe Suites",
        capacity: "Up to 4 guests",
        description:
          "One king bed plus two twin beds with private bathroom and daily breakfast. Located next to The Rock and Zaria Kitchen & Lab.",
        amenities: ["King bed + twin beds", "Private bathroom", "Ceiling fan", "Jungle balcony", "Daily breakfast", "Near Kitchen & Lab"],
        image: "/images/zaria/suite-bedroom-canopy.jpg",
      },
      {
        name: "Standard Suites",
        capacity: "2 guests",
        description:
          "Two twin beds with private bathroom and daily breakfast. Intimate jungle setting with balcony views.",
        amenities: ["Two twin beds", "Private bathroom", "Ceiling fan", "Jungle balcony", "Daily breakfast"],
        image: "/images/zaria/suite-bedroom-wide.jpg",
      },
    ],
    activities: [
      { name: "Whale Watching (Seasonal)" },
      { name: "Waterfall Tours" },
      { name: "Boat Rides to Playa Ermita\u00f1o" },
      { name: "Coffee & Cacao Route" },
      { name: "Zipline Tours" },
      { name: "Horseback Riding" },
      { name: "Beach Meditation" },
      { name: "Jungle Hikes" },
      { name: "Cooking at Zaria Kitchen & Lab" },
    ],
    gallery: [
      "/images/zaria/hero-aerial-pool.jpg",
      "/images/zaria/beach-aerial-boats.jpg",
      "/images/zaria/beach-hammock-palms.jpg",
      "/images/zaria/beach-swing-palm.jpg",
      "/images/zaria/suite-bedroom-canopy.jpg",
      "/images/zaria/suite-bedroom-wide.jpg",
      "/images/zaria/guest-reading-balcony.jpg",
      "/images/zaria/jungle-pavilion-night.jpg",
      "/images/zaria/dining-pavilion.jpg",
      "/images/zaria/restaurant-guests.jpg",
      "/images/zaria/chef-cooking.jpg",
      "/images/zaria/cacao-ceremony.jpg",
      "/images/zaria/horseback-beach.jpg",
      "/images/zaria/zipline-jungle.jpg",
      "/images/zaria/waterfall.jpg",
    ],
  },
];

export const comingSoonDestinations = [
  { name: "Peru", location: "Location Coming Soon", year: "2027" },
  { name: "Colombia", location: "Location Coming Soon", year: "2027" },
];
