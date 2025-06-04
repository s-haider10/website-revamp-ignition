
import { Adventure, AdventureFilter } from '../types/adventure';

export const adventures: Adventure[] = [
  {
    id: "1",
    title: "Conquering Mount Washington: A Winter Ascent",
    excerpt: "A thrilling winter climb up the Northeast's most challenging peak, featuring ice climbing, extreme weather, and breathtaking views above the clouds.",
    slug: "mount-washington-winter-ascent",
    date: "2024-02-15",
    readTime: "10 min read",
    tags: ["Mountain Climbing", "Winter Sports", "New Hampshire", "Extreme Weather"],
    image: "/cover_photo.jpg",
    location: "Mount Washington, New Hampshire",
    difficulty: "Extreme",
    distance: "8.2 miles",
    elevation: "4,300 ft gain",
    author: {
      name: "Shahzeb Haider",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    content: [
      {
        type: "heading",
        level: 1,
        content: "Conquering Mount Washington: A Winter Ascent"
      },
      {
        type: "text",
        content: "Mount Washington stands as the **tallest peak** in the northeastern United States, notorious for its extreme weather conditions and unpredictable climate. In winter, it transforms into one of the most challenging climbs on the East Coast.\n\nThis adventure chronicles my solo winter ascent via the Tuckerman Ravine Trail, where temperatures dropped to **-20°F** and winds reached **80+ mph**."
      },
      {
        type: "heading",
        level: 2,
        content: "The Journey Begins"
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=400&fit=crop",
        caption: "The trail leading up through snow-covered forests toward the summit"
      },
      {
        type: "text",
        content: "Starting at 4:30 AM from Pinkham Notch, the trail began as a gentle walk through **snow-laden forests**. The silence was profound, broken only by the crunch of microspikes on packed snow and the distant howl of wind high above."
      },
      {
        type: "quote",
        content: "The mountain doesn't care about your schedule, your goals, or your fears. It simply exists, and you must adapt to its terms."
      },
      {
        type: "heading",
        level: 2,
        content: "Technical Challenge: Ice Climbing Section"
      },
      {
        type: "text",
        content: "Above treeline, the real challenge began. The **Tuckerman Ravine headwall** presented a near-vertical ice climb requiring crampons, ice axes, and careful route-finding through unstable snow conditions."
      },
      {
        type: "image",
        content: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=400&fit=crop",
        caption: "The challenging ice-covered headwall section near the summit"
      },
      {
        type: "text",
        content: "The final push to the summit tested every piece of gear and technique. **Spindrift** (wind-blown snow) created whiteout conditions, making navigation by compass and GPS essential for safe passage."
      }
    ]
  },
  {
    id: "2",
    title: "Backpacking the Appalachian Trail: A 5-Day Section Hike",
    excerpt: "Multi-day wilderness adventure through Vermont's Green Mountains, featuring alpine lakes, ridge walks, and unforgettable sunrise views.",
    slug: "appalachian-trail-vermont",
    date: "2023-09-22",
    readTime: "8 min read",
    tags: ["Backpacking", "Appalachian Trail", "Vermont", "Multi-day"],
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=400&fit=crop",
    location: "Green Mountains, Vermont",
    difficulty: "Moderate",
    distance: "32 miles",
    elevation: "6,200 ft total",
    author: {
      name: "Shahzeb Haider",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    content: [
      {
        type: "heading",
        level: 1,
        content: "Backpacking the Appalachian Trail: Vermont Section"
      },
      {
        type: "text",
        content: "The **Appalachian Trail** through Vermont offers some of the most scenic ridge walking on the entire 2,190-mile trail. This 5-day section hike covered 32 miles through the Green Mountains, showcasing Vermont's rugged beauty."
      }
    ]
  },
  {
    id: "3",
    title: "Urban Adventure: Exploring NYC's Hidden Rooftops",
    excerpt: "Discovering the secret world above Manhattan's skyline, from abandoned buildings to stunning architectural photography opportunities.",
    slug: "nyc-rooftop-exploration",
    date: "2023-07-10",
    readTime: "6 min read",
    tags: ["Urban Exploration", "Photography", "New York City", "Architecture"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=400&fit=crop",
    location: "New York City, NY",
    difficulty: "Easy",
    author: {
      name: "Shahzeb Haider",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    content: [
      {
        type: "heading",
        level: 1,
        content: "Urban Adventure: NYC's Hidden Rooftops"
      },
      {
        type: "text",
        content: "Above the bustling streets of Manhattan lies a **hidden world** of rooftops, each offering unique perspectives of the city that never sleeps."
      }
    ]
  }
];

export const adventureFilters: AdventureFilter[] = [
  { tag: 'All', label: 'All Adventures' },
  { tag: 'Mountain Climbing', label: 'Mountain Climbing' },
  { tag: 'Backpacking', label: 'Backpacking' },
  { tag: 'Winter Sports', label: 'Winter Sports' },
  { tag: 'Urban Exploration', label: 'Urban Exploration' },
  { tag: 'Photography', label: 'Photography' },
  { tag: 'Multi-day', label: 'Multi-day' },
  { tag: 'Appalachian Trail', label: 'Appalachian Trail' }
];
