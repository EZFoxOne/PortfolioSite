// src/pages/Home.tsx
import { Link } from "react-router-dom";
import FadeIn from "@/components/motion/FadeIn";
import {
    ArrowRight,
    Github,
    Mail,
    Rocket,
    Sparkles,
    WalletMinimal,
    Wrench,
    Zap,
} from "lucide-react";
import { FEATURED_PROJECTS } from "@/data/projects";
import { StackMap } from "@/components/StackMap";

const SKILLS = [
    "TypeScript",
    "React 19",
    "Vite",
    "Tailwind v4",
    "Node",
    "Solana",
    "Anchor",
    "Jupiter APIs",
    "SQLite/Postgres",
    "Docker",
];

export default function Home() {
    // Take the first few featured projects for the home page
    const featured = FEATURED_PROJECTS.slice(0, 3);

    return (
        <div className="space-y-16">
            {/* ---------- HERO ---------- */}
            <section className="relative overflow-hidden">
                <FadeIn>
                    <div className="text-center space-y-5">
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-300">
                            <Sparkles className="size-3.5" />
                            Building useful, fast, and a little bit weird.
                        </span>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                            Cole Carey — <span className="text-primary">Software Engineer</span>
                        </h1>

                        <p className="mx-auto max-w-2xl text-gray-400">
                            I build things that run fast, feel good, and don’t fall over under
                            pressure. Web apps, bots, Solana systems — if it needs structure and
                            a little spark, I’m probably already working on it.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 pt-1">
                            <Link
                                to="/projects"
                                className="btn glow inline-flex items-center gap-2"
                            >
                                <Rocket className="size-4" />
                                View Projects
                            </Link>
                            <a
                                href="mailto:cole.carey@outlook.com"
                                className="btn inline-flex items-center gap-2"
                            >
                                <Mail className="size-4" />
                                Contact
                            </a>
                        </div>
                    </div>
                </FadeIn>

                {/* subtle background accent */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -top-32 grid place-items-center opacity-30"
                >
                    <div className="h-64 w-64 rounded-full blur-3xl bg-emerald-500/20" />
                </div>
            </section>

            {/* ---------- QUICK STATS ---------- */}
            <section className="grid gap-4 sm:grid-cols-3">
                <FadeIn>
                    <div className="card p-5 flex items-center gap-4">
                        <Zap className="size-5 text-primary" />
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Focus
                            </p>
                            <p className="text-sm text-gray-200">
                                React, TypeScript, Solana
                            </p>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <div className="card p-5 flex items-center gap-4">
                        <Wrench className="size-5 text-primary" />
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Build Style
                            </p>
                            <p className="text-sm text-gray-200">
                                Minimal surface area, maximum throughput
                            </p>
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className="card p-5 flex items-center gap-4">
                        <Github className="size-5 text-primary" />
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500">
                                Open Source
                            </p>
                            <p className="text-sm text-gray-200">
                                A handful of projects that escaped into the wild
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </section>

            {/* ---------- FEATURED PROJECTS ---------- */}
            <section className="space-y-6">
                <FadeIn>
                    <header className="flex items-end justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-white">
                                Featured Work
                            </h2>
                            <p className="text-sm text-gray-400">
                                A glimpse at some of the things I’ve shipped — public tools,
                                private systems, and the occasional experiment that spiraled
                                into a full project.
                            </p>
                        </div>
                        <Link
                            to="/projects"
                            className="text-sm text-emerald-300 hover:text-white inline-flex items-center gap-1"
                        >
                            See all <ArrowRight className="size-4" />
                        </Link>
                    </header>
                </FadeIn>

                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((project, i) => (
                        <FadeIn key={project.slug} delay={i * 0.06}>
                            <li className="card h-full p-5 flex flex-col">
                                <h3 className="text-lg font-semibold text-white">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-gray-400">
                                    {project.summary}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {project.tags.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-md border border-emerald-400/20 bg-emerald-500/5 px-2 py-1 text-xs text-emerald-300"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-4 pt-2">
                                    <Link
                                        to="/projects"
                                        className="btn glow inline-flex items-center gap-2"
                                    >
                                        See details <ArrowRight className="size-4" />
                                    </Link>
                                </div>
                            </li>
                        </FadeIn>
                    ))}
                </ul>
            </section>

            {/* ---------- SKILLS / TOOLING ---------- */}
            <section className="space-y-4">
                <FadeIn>
                    <h2 className="text-2xl font-semibold text-white">Core Stack</h2>
                </FadeIn>
                <FadeIn delay={0.05}>
                    <div className="grid gap-4 lg:grid-cols-[1.1fr,1fr] items-start">
                        {/* Skills pill list */}
                        <div className="card p-5">
                            <ul className="flex flex-wrap gap-2">
                                {SKILLS.map((s) => (
                                    <li
                                        key={s}
                                        className="rounded-md border border-gray-800 bg-gray-900/50 px-3 py-1.5 text-xs text-gray-300"
                                    >
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stack map */}
                        <StackMap />
                    </div>
                </FadeIn>
            </section>

            {/* ---------- CALL TO ACTION ---------- */}
            <section className="relative">
                <FadeIn>
                    <div className="card p-6 md:p-8 flex flex-col items-center text-center gap-4">
                        <h3 className="text-xl font-semibold text-white">
                            Have a project or idea worth shipping?
                        </h3>
                        <p className="max-w-2xl text-gray-400">
                            I take on a small number of collaborations where shipping matters
                            more than hand-waving. If you need a clean system, a fast UI, or a
                            Solana tool that won’t melt under load, let’s talk.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3">
                            <a
                                href="mailto:cole.carey@outlook.com"
                                className="btn inline-flex items-center gap-2"
                            >
                                <Mail className="size-4" />
                                Get in touch
                            </a>
                            <Link
                                to="/projects"
                                className="btn glow inline-flex items-center gap-2"
                            >
                                <Rocket className="size-4" />
                                Explore projects
                            </Link>
                        </div>
                    </div>
                </FadeIn>

                {/* sheen */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-6 -bottom-12 h-24 blur-3xl bg-emerald-500/20 opacity-30"
                />
            </section>
        </div>
    );
}
