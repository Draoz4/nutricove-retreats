import { PricingTier, AddOn, AddOnPackage } from "@/types";

export const pricingTiers: PricingTier[] = [
  {
    name: "Payment Plan",
    price: 7000,
    perPerson: true,
    note: "per person · 7 nights",
    features: [
      "Split into installments",
      "Full balance due 15 days before arrival",
      "All-inclusive retreat experience",
      "All 4 themes · Any destination",
    ],
    ctaLabel: "Select Plan",
  },
  {
    name: "Half Upfront",
    price: 6500,
    originalPrice: 7000,
    savings: "Save $500",
    perPerson: true,
    note: "per person · 7 nights",
    features: [
      "Pay $3,250 at booking",
      "Remaining $3,250 due 15 days before arrival",
      "All-inclusive retreat experience",
      "All 4 themes · Any destination",
    ],
    ctaLabel: "Save $500 →",
  },
  {
    name: "Pay in Full",
    price: 6000,
    originalPrice: 7000,
    savings: "Best Value — Save $1,000",
    perPerson: true,
    note: "per person · 7 nights",
    features: [
      "One payment — fully secured",
      "Biggest savings available",
      "All-inclusive retreat experience",
      "All 4 themes · Any destination",
      "Priority room selection",
    ],
    featured: true,
    ctaLabel: "Save $1,000 →",
  },
];

export const addOns: AddOn[] = [
  {
    category: "IV Drip Infusions",
    items: [
      { name: "Hydration Reset", description: "Saline + electrolytes + B vitamins", price: 150 },
      { name: "Myers' Cocktail", description: "Magnesium, calcium, B-complex, vitamin C", price: 225 },
      { name: "The Full Reset", description: "Myers' + glutathione + zinc + amino acids", price: 350 },
      { name: "Immunity Armor", description: "High-dose vitamin C + zinc + selenium + B12", price: 275 },
      { name: "NAD+ 250mg", price: 475 },
      { name: "NAD+ 500mg", price: 750 },
      { name: "Beauty Drip", description: "Biotin, glutathione, vitamin C, collagen support", price: 300 },
    ],
  },
  {
    category: "Peptide Injections",
    items: [
      { name: "BPC-157", description: "Gut & tissue healing", price: 150, unit: "session" },
      { name: "TB-500", description: "Tissue repair, inflammation", price: 175, unit: "session" },
      { name: "BPC-157 + TB-500 \"Wolverine Stack\"", price: 275, unit: "session" },
      { name: "GHK-Cu", description: "Collagen, anti-aging, skin", price: 200, unit: "session" },
      { name: "CJC-1295 + Ipamorelin", description: "Growth hormone support", price: 200, unit: "session" },
      { name: "Sermorelin", description: "Natural GH production", price: 175, unit: "session" },
    ],
  },
  {
    category: "IM Vitamin Shots",
    items: [
      { name: "B12 (Methylcobalamin)", price: 40 },
      { name: "Glutathione", price: 75 },
      { name: "Vitamin D3", price: 50 },
      { name: "Amino Blend", price: 60 },
      { name: "CoQ10", price: 60 },
    ],
  },
];

export const addOnPackages: AddOnPackage[] = [
  { name: "Arrival Reset", items: "Hydration IV + B12 shot Day 1", price: 175, savings: "Save $15" },
  { name: "The Narai Protocol", items: "Myers' Day 2 + NAD+ 250mg Day 4 + Glutathione shot Day 6", price: 700, savings: "Save $75" },
  { name: "Full Restoration", items: "Full Reset IV Day 1 + NAD+ 500mg Day 3 + BPC-157 Day 5 + Glutathione Day 6", price: 1150, savings: "Save $125" },
  { name: "Longevity Package", items: "NAD+ 500mg Day 2 + NAD+ 500mg Day 5 + Full Reset IV Day 6 + B12 + Glutathione", price: 1700, savings: "Save $215" },
  { name: "Peptide Recovery Stack", items: "BPC-157 + TB-500 Day 2 + GHK-Cu Day 4 + BPC-157 Day 6", price: 525, savings: "Save $75" },
];
