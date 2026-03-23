export type Insect = {
  id: string;
  name: string;
  type: "mayfly" | "caddis" | "stonefly" | "midge";
  hatchTemp: { min: number; max: number };
  hatchMonths: number[];
  timeOfDay: ("morning" | "midday" | "evening")[];
  suggestedFly: string;
};

export type River = {
  id: string;
  name: string;
  region: string;
  currentWaterTemp: number;
  insects: string[];
};

export const insects: Insect[] = [
  {
    id: "bwo",
    name: "Blue-Winged Olive",
    type: "mayfly",
    hatchTemp: { min: 46, max: 58 },
    hatchMonths: [3, 4, 5, 9, 10],
    timeOfDay: ["midday", "evening"],
    suggestedFly: "Parachute Adams #18",
  },
  {
    id: "pmd",
    name: "Pale Morning Dun",
    type: "mayfly",
    hatchTemp: { min: 52, max: 62 },
    hatchMonths: [6, 7, 8],
    timeOfDay: ["morning", "midday"],
    suggestedFly: "Sparkle Dun #16",
  },
  {
    id: "trico",
    name: "Trico",
    type: "mayfly",
    hatchTemp: { min: 58, max: 68 },
    hatchMonths: [7, 8, 9],
    timeOfDay: ["morning"],
    suggestedFly: "Parachute Adams #18",
  },
  {
    id: "elk-hair",
    name: "Elk Hair Caddis",
    type: "caddis",
    hatchTemp: { min: 50, max: 65 },
    hatchMonths: [5, 6, 7, 8],
    timeOfDay: ["evening"],
    suggestedFly: "Elk Hair Caddis #14",
  },
  {
    id: "mother",
    name: "Mothers Day Caddis",
    type: "caddis",
    hatchTemp: { min: 48, max: 56 },
    hatchMonths: [4, 5],
    timeOfDay: ["midday", "evening"],
    suggestedFly: "X-Caddis #16",
  },
  {
    id: "october",
    name: "October Caddis",
    type: "caddis",
    hatchTemp: { min: 44, max: 54 },
    hatchMonths: [9, 10, 11],
    timeOfDay: ["evening"],
    suggestedFly: "Orange Stimulator #8",
  },
  {
    id: "salmonfly",
    name: "Salmonfly",
    type: "stonefly",
    hatchTemp: { min: 50, max: 58 },
    hatchMonths: [5, 6, 7],
    timeOfDay: ["midday", "evening"],
    suggestedFly: "Chubby Chernobyl #6",
  },
  {
    id: "golden",
    name: "Golden Stonefly",
    type: "stonefly",
    hatchTemp: { min: 52, max: 62 },
    hatchMonths: [6, 7],
    timeOfDay: ["midday"],
    suggestedFly: "Pat's Rubber Legs #8",
  },
  {
    id: "skwala",
    name: "Skwala",
    type: "stonefly",
    hatchTemp: { min: 38, max: 48 },
    hatchMonths: [2, 3, 4],
    timeOfDay: ["midday", "evening"],
    suggestedFly: "Skwala Dry #10",
  },
  {
    id: "zebra",
    name: "Zebra Midge",
    type: "midge",
    hatchTemp: { min: 34, max: 50 },
    hatchMonths: [1, 2, 3, 11, 12],
    timeOfDay: ["morning", "midday"],
    suggestedFly: "Zebra Midge #20",
  },
  {
    id: "griffiths",
    name: "Griffith's Gnat",
    type: "midge",
    hatchTemp: { min: 32, max: 48 },
    hatchMonths: [1, 2, 3, 4, 11, 12],
    timeOfDay: ["midday"],
    suggestedFly: "Griffith's Gnat #22",
  },
  {
    id: "top-secret",
    name: "Top Secret Midge",
    type: "midge",
    hatchTemp: { min: 36, max: 52 },
    hatchMonths: [2, 3, 4, 10, 11, 12],
    timeOfDay: ["morning", "midday", "evening"],
    suggestedFly: "RS2 #24",
  },
];

export const rivers: River[] = [
  {
    id: "south-platte",
    name: "South Platte",
    region: "Colorado Front Range",
    currentWaterTemp: 48,
    insects: ["bwo", "pmd", "trico", "zebra", "griffiths", "top-secret"],
  },
  {
    id: "arkansas",
    name: "Arkansas",
    region: "Colorado",
    currentWaterTemp: 54,
    insects: ["bwo", "pmd", "elk-hair", "mother", "salmonfly", "golden"],
  },
  {
    id: "gunnison",
    name: "Gunnison",
    region: "Colorado Western Slope",
    currentWaterTemp: 44,
    insects: ["bwo", "skwala", "october", "griffiths", "zebra"],
  },
  {
    id: "madison",
    name: "Madison",
    region: "Montana",
    currentWaterTemp: 52,
    insects: ["bwo", "pmd", "elk-hair", "salmonfly", "golden", "trico"],
  },
  {
    id: "deschutes",
    name: "Deschutes",
    region: "Oregon",
    currentWaterTemp: 58,
    insects: [
      "pmd",
      "trico",
      "elk-hair",
      "october",
      "salmonfly",
      "golden",
      "top-secret",
    ],
  },
];
