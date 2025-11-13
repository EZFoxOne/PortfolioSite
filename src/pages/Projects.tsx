import { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { ArrowUpRight, Filter, X } from "lucide-react";

type Project = {
    title: string;
    summary: string;
    tags: string[];
    link?: string;
    details?: string;
};

const PROJECTS: Project[] = [
    {
        title: "Solana Lottery (Anchor + VRF)",
        summary:
            "On-chain lottery system featuring secure ticketing, random draws via Switchboard VRF, vault-based payouts, and event lifecycle automation.",
        tags: ["Solana", "Anchor", "Switchboard VRF", "TypeScript"],
        link: "https://github.com/EZFoxone",
        details:
            "This project leverages Solana's high throughput to create a fully trustless lottery. It integrates VRF randomness for provable fairness, and a vault-based prize mechanism that ensures distributed ownership of the reward pool.",
    },
    {
        title: "Persona (Discord Game Layer)",
        summary:
            "Cross-server RPG mechanics, leveling, duels, and token-based economies built for Discord communities.",
        tags: ["Discord", "TypeScript", "Game Systems"],
        link: "https://github.com/EZFoxone",
        details:
            "Persona turns Discord servers into living RPG worlds. Each user is a 'Persona'—earning XP, collecting items, and engaging in cooperative or competitive events. Built for speed and modular expansion.",
    },
    {
        title: "Alphabet Tokens (A–Z Liquidity)",
        summary:
            "Experimental project connecting 26 tokens by letter through pooled liquidity and animated price tracking.",
        tags: ["Vite", "Tailwind", "DeFi Viz"],
        link: "https://github.com/EZFoxone",
        details:
            "The Alphabet project is an art-meets-finance experiment where each letter A–Z represents its own SPL token, interconnected by liquidity pools. The goal: explore visual and tokenomics feedback loops.",
    },
    {
        title: "DJ Shawn Solo (Karaoke System)",
        summary:
            "Three-part web app for DJs and patrons featuring event management, song requests, and real-time queue control.",
        tags: ["Next.js", "SQLite", "WebSockets", "UX Design"],
        link: "https://github.com/EZFoxone",
        details:
            "Designed for live events, this app provides patrons with a mobile-first interface to request songs via QR, while DJs manage requests, event analytics, and local storage syncs.",
    },
];

export default function Projects() {
    const [filter, setFilter] = useState<string | null>(null);
    const [selected, setSelected] = useState<Project | null>(null);

    const tags = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

    const visible = filter
        ? PROJECTS.filter((p) => p.tags.includes(filter))
        : PROJECTS;

    return (
        <section className="space-y-10">
            {/* Header */}
            <FadeIn>
                <header className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-white">Projects</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Selected builds across on-chain, Discord, and frontend ecosystems.
                        Every project here solves a real problem, or creates a playful one.
                    </p>
                </header>
            </FadeIn>

            {/* Filters */}
            <FadeIn delay={0.05}>
                <div className="flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => setFilter(null)}
                        className={`inline-flex items-center gap-1 rounded-md border px-3 py-1 text-xs font-medium transition-colors ${
                            !filter
                                ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                                : "border-gray-800 bg-gray-950 text-gray-400 hover:border-emerald-400/40 hover:text-emerald-300"
                        }`}
                    >
                        <Filter className="size-3" /> All
                    </button>
                    {tags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter((f) => (f === t ? null : t))}
                            className={`rounded-md border px-3 py-1 text-xs font-medium transition-colors ${
                                filter === t
                                    ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                                    : "border-gray-800 bg-gray-950 text-gray-400 hover:border-emerald-400/40 hover:text-emerald-300"
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </FadeIn>

            {/* Project Grid */}
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((p, i) => (
                    <FadeIn key={p.title} delay={i * 0.05}>
                        <li
                            onClick={() => setSelected(p)}
                            className="card p-5 cursor-pointer transition-transform hover:scale-[1.02] hover:border-emerald-400/30"
                        >
                            <h2 className="text-lg font-semibold text-white">{p.title}</h2>
                            <p className="mt-2 text-sm text-gray-400">{p.summary}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-md border border-emerald-400/20 bg-emerald-500/5 px-2 py-1 text-xs text-emerald-300"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>
                        </li>
                    </FadeIn>
                ))}
            </ul>

            {/* Details Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4"
                    onClick={() => setSelected(null)}
                >
                    <div
                        className="relative w-full max-w-2xl rounded-2xl border border-gray-800 bg-surface shadow-glow p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelected(null)}
                            className="absolute top-3 right-3 rounded-md p-2 text-gray-400 hover:bg-gray-900/60 hover:text-white"
                            aria-label="Close"
                        >
                            <X className="size-5" />
                        </button>

                        <h3 className="text-xl font-semibold text-white">{selected.title}</h3>
                        <p className="mt-2 text-sm text-gray-400">{selected.details}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {selected.tags.map((t) => (
                                <span
                                    key={t}
                                    className="rounded-md border border-emerald-400/20 bg-emerald-500/5 px-2 py-1 text-xs text-emerald-300"
                                >
                  {t}
                </span>
                            ))}
                        </div>

                        {selected.link && (
                            <a
                                href={selected.link}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 hover:text-white transition-colors"
                            >
                                View Repository <ArrowUpRight className="size-4" />
                            </a>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
