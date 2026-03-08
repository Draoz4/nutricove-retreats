import { RetreatTheme } from "@/types";

export const retreatThemes: RetreatTheme[] = [
  {
    slug: "release",
    name: "Release",
    subtitle: "Separation & Heartbreak",
    description:
      "Guided sessions focus on emotional processing, identity untangling, and learning to let go without losing yourself. Cathartic movement, anger-release bodywork, and bonfire burning rituals. Leave lighter than you arrived.",
    forText: "Anyone within 12 months of a breakup, divorce, or the end of a significant relationship",
    color: "terracotta",
    arc: ["Acknowledge", "Feel", "Understand", "Forgive", "Release", "Rebuild", "Emerge"],
    days: [
      { day: 1, title: "You Don\u2019t Have to Hold It Together Here", description: "Arrival, acknowledgment session, Thai herbal compress workshop, cacao welcome ceremony" },
      { day: 2, title: "What Are You Still Carrying?", description: "Weight inventory exercise, letter to ex (never sent), Thai massage" },
      { day: 3, title: "The Anger You Haven\u2019t Let Yourself Feel", description: "Anger excavation session, Muay Thai as controlled release, sound bath" },
      { day: 4, title: "Forgiveness Is Not Reconciliation", description: "Forgiveness as freedom exercise, floating ocean meditation, ceremony night" },
      { day: 5, title: "Who Were You Before Them?", description: "Identity archaeology, waterfall hike, ceremony night" },
      { day: 6, title: "Putting It Down", description: "Putting it down ritual, bonfire where guests burn letters to ex, art/creative expression" },
      { day: 7, title: "Departure", description: "Integration guide, goodbye ceremony" },
    ],
  },
  {
    slug: "reset",
    name: "Reset",
    subtitle: "Burnout & Exhaustion",
    description:
      "Stop performing. Start recovering. Daily sessions emphasize nervous system regulation, boundary-setting, and rebuilding from clarity \u2014 not crisis. Hammock time isn\u2019t optional. Naps are prescribed.",
    forText: "Founders, executives, healthcare workers, and anyone running on empty",
    color: "ocean",
    arc: ["Collapse", "Permission", "Inventory", "Clarity", "Boundaries", "Redesign", "Recommit"],
    days: [
      { day: 1, title: "You Can Stop Now", description: "Digital detox begins, arrival debrief, slow yoga, candlelit dinner" },
      { day: 2, title: "Your Body Has Been Screaming", description: "Somatic session, contrast therapy (ice bath/sauna), Thai massage" },
      { day: 3, title: "When Did You Stop Playing?", description: "Permission inventory, kayaking, cooking class" },
      { day: 4, title: "What If You Just\u2026Didn\u2019t?", description: "Burnout timeline mapping, IV therapy recommended, ceremony night" },
      { day: 5, title: "Designing Your New Operating System", description: "Boundary-setting workshop, snorkeling, ceremony night" },
      { day: 6, title: "The Unstructured Morning", description: "No schedule until noon (hardest assignment), life redesign blueprint, bonfire" },
      { day: 7, title: "Departure", description: "Integration guide, goodbye ceremony" },
    ],
  },
  {
    slug: "return",
    name: "Return",
    subtitle: "Grief & Loss",
    description:
      "The gentlest retreat \u2014 no high-intensity activation. Guided grief work, remembrance rituals, floating ocean meditation, letter-writing ceremonies. Learning to carry love forward, not leave it behind.",
    forText: "Those processing the death of a loved one or a life transition that changed everything",
    color: "sage",
    arc: ["Honor", "Remember", "Feel", "Accept", "Carry", "Reconnect", "Return"],
    days: [
      { day: 1, title: "They Were Here", description: "Candle lighting ceremony (stays lit all week), gentle arrival, early rest" },
      { day: 2, title: "Tell Me About Them", description: "Remembering the life not the loss, memory mapping, gentle walking meditation" },
      { day: 3, title: "The Waves Come When They Come", description: "Grief education, monk chat about impermanence, journaling" },
      { day: 4, title: "Being Held", description: "Most emotional day, floating ocean meditation, ceremony night" },
      { day: 5, title: "What They\u2019d Want You to Know", description: "Reframing exercise, stargazing meditation, ceremony night" },
      { day: 6, title: "Carrying Love Forward", description: "Letter writing (one to them, one from them), bonfire as integration, closing dinner" },
      { day: 7, title: "Departure", description: "Each guest takes their candle home, integration guide" },
    ],
  },
  {
    slug: "reclaim",
    name: "Reclaim",
    subtitle: "Identity & Purpose",
    description:
      "Deconstruct who you were told to be. Excavate who you actually are. Identity mapping, life blueprint exercises, public declaration ceremonies. Leave with a plan and the courage to follow it.",
    forText: "Anyone at a crossroads \u2014 career collapse, addiction recovery, empty nest, midlife reckoning",
    color: "gold",
    arc: ["Arrive", "Deconstruct", "Excavate", "Confront", "Imagine", "Build", "Declare"],
    days: [
      { day: 1, title: "Life Has Dimensions", description: "Thai cultural performance, settling in, intention setting" },
      { day: 2, title: "The Costume Closet", description: "Identity mapping exercise, deconstructing who you were told to be" },
      { day: 3, title: "Wake Up Your Senses", description: "Cooking class as sensory re-engagement, journaling, beach yoga" },
      { day: 4, title: "You Still Have Power", description: "Muay Thai reframed as agency/power, ceremony night" },
      { day: 5, title: "The Blueprint", description: "Structured life blueprint with specific first actions, ceremony night" },
      { day: 6, title: "Declaration", description: "Public declaration ceremony, bonfire as building ritual (adding sticks = building next chapter)" },
      { day: 7, title: "Departure", description: "Integration guide with first 3 actions, goodbye ceremony" },
    ],
  },
];
