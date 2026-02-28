export const mockProjects = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    userId: "FVOReoqWnGtWGW3pYoFtDrsufdSSFTb6",
    title: "AI-Powered Gif Search Engine",
    description:
      "Build a gif search engine that uses AI to understand the emotion or vibe you're describing rather than just keywords. Type 'when your code finally works' and get perfectly matched gifs.",
    hook: "Because 'excited but also terrified' deserves its own gif category.",
    difficultyRating: 3,
    difficultyDescription:
      "Requires integrating an LLM for semantic understanding and wiring up the Giphy/Tenor API, but no novel ML work needed.",
    usabilityRating: 5,
    usabilityDescription:
      "Everyone sends gifs. A smarter search that just gets you is immediately useful every single day.",
    hireabilityRating: 4,
    hireabilityDescription:
      "Demonstrates LLM integration, API design, and a polished consumer-facing UI — a solid trifecta for frontend/fullstack roles.",
    absurdityRating: 3,
    absurdityDescription:
      "Solving a real problem in a slightly unhinged way. Peak side project energy.",
    techStack: ["Next.js", "OpenAI API", "Giphy API", "Tailwind CSS"],
    learningValue: [
      "Semantic search concepts",
      "LLM prompt engineering",
      "Third-party API integration",
      "Debounced search UX",
    ],
    upvotes: 142,
    createdAt: new Date("2025-01-15T10:00:00Z"),
    updatedAt: new Date("2025-01-15T10:00:00Z"),
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440002",
    userId: "TBcvpZH8FOoLekfSzUGf7sB8RV0UbWMb",
    title: "Passive-Aggressive Code Reviewer",
    description:
      "A VS Code extension that reviews your code with the energy of a senior dev who hasn't had coffee yet. Still technically correct, just... pointed.",
    hook: "Finally, a linter with feelings.",
    difficultyRating: 2,
    difficultyDescription:
      "VS Code extension API is well-documented and building the LLM prompt to nail the tone is half the fun.",
    usabilityRating: 3,
    usabilityDescription:
      "Mostly a novelty, but the underlying code feedback is genuinely useful once you get past the attitude.",
    hireabilityRating: 4,
    hireabilityDescription:
      "VS Code extension development is a niche skill that stands out on a resume, and it shows product thinking.",
    absurdityRating: 5,
    absurdityDescription:
      "It's a linter that sighs at you. Maximum absurdity achieved.",
    techStack: ["TypeScript", "VS Code API", "OpenAI API"],
    learningValue: [
      "VS Code extension architecture",
      "AST code analysis basics",
      "LLM persona prompting",
      "Publishing to VS Code marketplace",
    ],
    upvotes: 389,
    createdAt: new Date("2025-02-03T14:30:00Z"),
    updatedAt: new Date("2025-02-03T14:30:00Z"),
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440003",
    userId: "FVOReoqWnGtWGW3pYoFtDrsufdSSFTb6",
    title: "Local-First Habit Tracker with Zero Cloud",
    description:
      "A beautifully minimal habit tracker that lives entirely on your device. No accounts, no subscriptions, no server — just SQLite, a slick UI, and your data actually belonging to you.",
    hook: "Your streak data shouldn't require a $12/month subscription to exist.",
    difficultyRating: 2,
    difficultyDescription:
      "Straightforward CRUD with local storage. The challenge is in the polish and data export, not the architecture.",
    usabilityRating: 5,
    usabilityDescription:
      "Habit trackers are used daily and the privacy-first angle has real demand. People are genuinely tired of SaaS creep.",
    hireabilityRating: 3,
    hireabilityDescription:
      "Shows care for UX and data privacy principles, though the tech surface area is intentionally small.",
    absurdityRating: 1,
    absurdityDescription:
      "Completely reasonable. Almost suspiciously so. Build it anyway.",
    techStack: ["Tauri", "React", "SQLite", "Tailwind CSS"],
    learningValue: [
      "Local-first architecture",
      "Tauri desktop app development",
      "SQLite with Rust bindings",
      "Offline-first data sync patterns",
    ],
    upvotes: 217,
    createdAt: new Date("2025-02-20T09:15:00Z"),
    updatedAt: new Date("2025-02-20T09:15:00Z"),
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440004",
    userId: "TBcvpZH8FOoLekfSzUGf7sB8RV0UbWMb",
    title: "Multiplayer Cursor Rave",
    description:
      "A shared canvas where every connected user's cursor becomes a dancing particle. Mouse movements generate music. The more chaotic the cursors, the more chaotic the beat.",
    hook: "What if your mouse was a DJ?",
    difficultyRating: 4,
    difficultyDescription:
      "Real-time sync across users with low latency is genuinely tricky, and audio generation from input adds another layer of complexity.",
    usabilityRating: 2,
    usabilityDescription:
      "Completely useless in the best possible way. Perfect for showing off at parties or in a browser tab you never close.",
    hireabilityRating: 4,
    hireabilityDescription:
      "WebSockets, Web Audio API, and real-time state sync are legitimately impressive skills to demo in a fun wrapper.",
    absurdityRating: 5,
    absurdityDescription:
      "Your cursor. Is a DJ. At a rave. With strangers. Yes.",
    techStack: [
      "Next.js",
      "Ably / Partykit",
      "Web Audio API",
      "Canvas API",
      "TypeScript",
    ],
    learningValue: [
      "WebSocket real-time state management",
      "Web Audio API synthesis",
      "Canvas rendering optimization",
      "Multiplayer conflict resolution",
    ],
    upvotes: 521,
    createdAt: new Date("2025-03-01T18:45:00Z"),
    updatedAt: new Date("2025-03-01T18:45:00Z"),
  },
  {
    id: "550e8400-e29b-41d4-a716-446655440005",
    userId: "FVOReoqWnGtWGW3pYoFtDrsufdSSFTb6",
    title: "RFC-to-English Translator",
    description:
      "Paste any IETF RFC document URL and get back a plain-English breakdown — what it is, why it exists, and what a dev actually needs to know. No more reading 80-column monospaced walls of text.",
    hook: "RFC 2549 describes IP over Avian Carriers. Someone had to decode that so you don't have to.",
    difficultyRating: 2,
    difficultyDescription:
      "Mostly prompt engineering and document chunking. The hard part is making the summaries genuinely useful rather than just shorter.",
    usabilityRating: 4,
    usabilityDescription:
      "Any developer who's had to implement OAuth, MIME types, or HTTP from scratch will immediately bookmark this.",
    hireabilityRating: 3,
    hireabilityDescription:
      "Shows developer empathy, RAG fundamentals, and an understanding of technical documentation — underrated skills.",
    absurdityRating: 2,
    absurdityDescription:
      "Sane project, mildly unhinged dataset. The RFC for IP over pigeons is real and that alone earns a point.",
    techStack: ["Next.js", "OpenAI API", "LangChain", "Tailwind CSS"],
    learningValue: [
      "RAG (Retrieval Augmented Generation)",
      "Document chunking strategies",
      "Long-context summarization",
      "Technical content UX",
    ],
    upvotes: 95,
    createdAt: new Date("2025-03-10T11:00:00Z"),
    updatedAt: new Date("2025-03-10T11:00:00Z"),
  },
];
