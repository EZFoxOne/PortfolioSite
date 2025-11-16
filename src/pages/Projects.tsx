// src/pages/Projects.tsx
import { useState } from "react";
import FadeIn from "@/components/motion/FadeIn";
import { Filter } from "lucide-react";
import { PROJECTS, type Project } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDetailModal } from "@/components/projects/ProjectDetailModal";
import { CurrentlyWorkingOn } from "@/components/CurrentlyWorkingOn";

export default function Projects() {
    const [filter, setFilter] = useState<string | null>(null);
    const [selected, setSelected] = useState<Project | null>(null);

    const tags = Array.from(new Set(PROJECTS.flatMap((p) => p.tags))).sort();

    const visible = filter
        ? PROJECTS.filter((p) => p.tags.includes(filter))
        : PROJECTS;

    return (
        <section className="space-y-12">
            {/* Header */}
            <FadeIn>
                <header className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-white">Projects</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A curated set of the things I’ve actually shipped — web apps, bots,
                        Solana tools, internal systems. Some repos are public, some live behind
                        client walls, but every project here is real and battle-tested.
                    </p>
                </header>
            </FadeIn>

            {/* CURRENTLY WORKING ON */}
            <FadeIn delay={0.05}>
                <div className="max-w-3xl mx-auto">
                    <CurrentlyWorkingOn />
                </div>
            </FadeIn>

            {/* Filters */}
            <FadeIn delay={0.1}>
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
            <FadeIn delay={0.15}>
                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
                    {visible.map((project, i) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            index={i}
                            onClick={() => setSelected(project)}
                        />
                    ))}
                </ul>
            </FadeIn>

            {/* Details Modal */}
            <ProjectDetailModal
                project={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    );
}
