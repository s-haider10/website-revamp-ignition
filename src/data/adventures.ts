import { Adventure, AdventureFilter } from "../types/adventure";

export const adventures: Adventure[] = [
  // {
  //   id: "1",
  //   title: "Conquering Mount Washington: A Winter Ascent",
  //   excerpt:
  //     "A thrilling winter climb up the Northeast's most challenging peak, featuring ice climbing, extreme weather, and breathtaking views above the clouds.",
  //   slug: "mount-washington-winter-ascent",
  //   date: "2024-02-15",
  //   readTime: "10 min read",
  //   tags: [
  //     "Mountain Climbing",
  //     "Winter Sports",
  //     "New Hampshire",
  //     "Extreme Weather",
  //   ],
  //   image: "/cover_photo.jpg",
  //   location: "Mount Washington, New Hampshire",
  //   difficulty: "Extreme",
  //   distance: "8.2 miles",
  //   elevation: "4,300 ft gain",
  //   author: {
  //     name: "Shahzeb Haider",
  //     avatar:
  //       "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
  //   },
  //   content: [
  //     {
  //       type: "heading",
  //       level: 1,
  //       content: "Conquering Mount Washington: A Winter Ascent",
  //     },
  //     {
  //       type: "text",
  //       content:
  //         "Mount Washington stands as the **tallest peak** in the northeastern United States, notorious for its extreme weather conditions and unpredictable climate. In winter, it transforms into one of the most challenging climbs on the East Coast.\n\nThis adventure chronicles my solo winter ascent via the Tuckerman Ravine Trail, where temperatures dropped to **-20°F** and winds reached **80+ mph**.",
  //     },
  //     {
  //       type: "heading",
  //       level: 2,
  //       content: "The Journey Begins",
  //     },
  //     {
  //       type: "image",
  //       content:
  //         "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
  //       caption:
  //         "The trail leading up through snow-covered forests toward the summit",
  //     },
  //     {
  //       type: "text",
  //       content:
  //         "Starting at 4:30 AM from Pinkham Notch, the trail began as a gentle walk through **snow-laden forests**. The silence was profound, broken only by the crunch of microspikes on packed snow and the distant howl of wind high above.",
  //     },
  //     {
  //       type: "quote",
  //       content:
  //         "The mountain doesn't care about your schedule, your goals, or your fears. It simply exists, and you must adapt to its terms.",
  //     },
  //     {
  //       type: "heading",
  //       level: 2,
  //       content: "Technical Challenge: Ice Climbing Section",
  //     },
  //     {
  //       type: "text",
  //       content:
  //         "Above treeline, the real challenge began. The **Tuckerman Ravine headwall** presented a near-vertical ice climb requiring crampons, ice axes, and careful route-finding through unstable snow conditions.",
  //     },
  //     {
  //       type: "image",
  //       content:
  //         "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
  //       caption: "The challenging ice-covered headwall section near the summit",
  //     },
  //     {
  //       type: "text",
  //       content:
  //         "The final push to the summit tested every piece of gear and technique. **Spindrift** (wind-blown snow) created whiteout conditions, making navigation by compass and GPS essential for safe passage.",
  //     },
  //   ],
  // },
];

export const adventureFilters: AdventureFilter[] = [
  { tag: "All", label: "All Adventures" },
  { tag: "Mountain Climbing", label: "Mountain Climbing" },
  { tag: "Backpacking", label: "Backpacking" },
  { tag: "Winter Sports", label: "Winter Sports" },
  { tag: "Urban Exploration", label: "Urban Exploration" },
  { tag: "Photography", label: "Photography" },
  { tag: "Multi-day", label: "Multi-day" },
  { tag: "Appalachian Trail", label: "Appalachian Trail" },
];
