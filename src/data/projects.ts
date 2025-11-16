// src/data/projects.ts
export type ProjectVisibility = "Public" | "Private";

export type Project = {
    title: string;
    slug: string; // useful later for routing/anchors
    summary: string;
    tags: string[];
    visibility: ProjectVisibility;
    tech?: string;
    link?: string;      // only for real public URLs
    details?: string;
    featured?: boolean; // use to drive "Featured" on Home
};

export const PROJECTS: Project[] = [
    {
        title: "Portfolio Site",
        slug: "portfolio-site",
        summary:
            "A living portfolio that showcases shipped work, tools, and experiments across web and crypto.",
        tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Frontend"],
        visibility: "Public",
        tech: "React + TypeScript + Vite + TailwindCSS",
        details:
            "This site is designed as a portfolio that can evolve with new projects and experiments. It focuses on fast load times, clean layout, and reusable components that make it easy to highlight real work without hand-waving.",
        featured: true,
        link: "https://github.com/EZFoxOne/PortfolioSite",
    },
    {
        title: "eReader Editor",
        slug: "ereader-editor",
        summary:
            "Custom eReader and editor for university instructors working with OpenStax content.",
        tags: ["JavaScript", "HTML", "CSS", "EdTech"],
        visibility: "Private",
        tech: "Vanilla JavaScript, Vanilla CSS, HTML",
        details:
            "Instructors use the editor to modify OpenStax content and push updates that propagate directly to student eReaders. Built with a focus on reliability and simplicity for institutional environments.",
        featured: true,
    },
    {
        title: "Crypto Token Website",
        slug: "crypto-token-website",
        summary:
            "Single page app introducing a memecoin, explaining token details, price, and how to buy.",
        tags: ["React", "TypeScript", "Vite", "TailwindCSS", "Crypto"],
        visibility: "Public",
        tech: "React + TypeScript + Vite + TailwindCSS",
        details:
            "The site walks new users through what the token is, how it works, shows live pricing, and provides a clear path to buy. Fast, mobile-first, and easy to retheme for future tokens.",
        featured: false,
        link: "https://github.com/EZFoxOne/ptsd",
    },
    {
        title: "Jupiter Lend Liquidator",
        slug: "jupiter-lend-liquidator",
        summary:
            "Background service scanning Jupiter Lend for liquidations and executing flash-loan based arbitrage.",
        tags: ["Solana", "DeFi", "Automation", "TypeScript"],
        visibility: "Private",
        tech: "React + TypeScript + Vite",
        details:
            "Continuously monitors Jupiter Lend for under-collateralized positions, constructs flash loan transactions to perform the liquidation, repays the loan, and captures profit in a single atomic transaction.",
        featured: false,
    },
    {
        title: "SolCrucible",
        slug: "solcrucible",
        summary:
            "Wallet management interface for closing accounts, burning tokens, and rebate-driven cleanup flows.",
        tags: ["Solana", "DeFi", "Token Management", "TypeScript"],
        visibility: "Private",
        tech: "React + TypeScript + Vite",
        details:
            "SolCrucible helps clean up token and NFT clutter by closing empty accounts and burning assets. Fees are used to buy a token and return those tokens back to the user as a rebate. No dev fees; revenue comes only from liquidity fees on swaps.",
        featured: true,
    },
    {
        title: "IndexedDB Manager",
        slug: "indexeddb-manager",
        summary:
            "Lightweight class for managing IndexedDB storage in pure JavaScript apps.",
        tags: ["JavaScript", "IndexedDB", "Storage"],
        visibility: "Public",
        tech: "Vanilla JavaScript",
        details:
            "Provides a small, focused API for opening databases, managing object stores, and performing typical CRUD operations without constantly wrestling with IndexedDB’s low-level API.",
        featured: false,
        link: "https://github.com/EZFoxOne/IndexedDB-Manager",
    },
    {
        title: "Meteora DLMM Calculator",
        slug: "meteora-dlmm-calculator",
        summary:
            "Browser-based tool for scanning Meteora DLMM pools and surfacing useful stats.",
        tags: ["JavaScript", "DeFi", "Analytics", "HTML", "CSS"],
        visibility: "Public",
        tech: "Vanilla JavaScript + CSS + HTML",
        details:
            "Queries Meteora DLMM pools, computes basic metrics, and lets you scan and sort for potentially attractive pools with minimal visual noise.",
        featured: false,
        link: "https://github.com/EZFoxOne/MeteoraDLMMCalculator",
    },
    {
        title: "Disco Chat",
        slug: "disco-chat",
        summary:
            "Discord bot that turns chat activity into a pseudo-blockchain mining game.",
        tags: ["Discord", "Python", "Game Systems"],
        visibility: "Private",
        tech: "Python + discord.py",
        details:
            "Every message is hashed as part of a mining attempt. When a user 'mines' a block, the winning message gets tagged and the user earns in-bot tokens for engagement mechanics.",
        featured: false,
    },
    {
        title: "Grid Trading Bot",
        slug: "grid-trading-bot",
        summary:
            "Exchange trading bot that builds ladder-style bid/ask grids on selected pairs.",
        tags: ["Python", "Trading", "Automation"],
        visibility: "Private",
        tech: "Python",
        details:
            "Mimics AMM-like behavior by maintaining a grid of limit orders on centralized exchanges, aiming to capture volatility with controlled, predictable behavior.",
        featured: false,
    },
    {
        title: "Doorman",
        slug: "doorman",
        summary:
            "Discord verification bot that gates server access behind configurable checks.",
        tags: ["Discord", "Python", "Moderation"],
        visibility: "Private",
        tech: "Python + discord.py",
        details:
            "Provides numeric challenges, captcha-like flows, and configurable verification steps before assigning roles. Built to reduce spam and raids without wrecking the UX for real users.",
        featured: false,
    },
];

export const FEATURED_PROJECTS: Project[] = PROJECTS.filter(
    (p) => p.featured
);
