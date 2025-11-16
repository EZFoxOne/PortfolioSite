// src/components/projects/ProjectDetailModal.tsx
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectDetailModalProps = {
    project: Project | null;
    onClose: () => void;
};

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
    if (!project) return null;

    return (
        <div
            className="fixed inset-0 z-50 grid place-items-center bg-black/70 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-2xl rounded-2xl border border-gray-800 bg-surface shadow-glow p-6"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button sits in its own reserved corner */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 rounded-md p-2 text-gray-400 hover:bg-gray-900/60 hover:text-white"
                    aria-label="Close"
                >
                    <X className="size-5" />
                </button>

                {/* Header: note the pr-10 so content doesn't sit under the X */}
                <div className="flex items-start justify-between gap-3 pr-10">
                    <div>
                        <h3 className="text-xl font-semibold text-white">
                            {project.title}
                        </h3>
                        {project.tech && (
                            <p className="mt-1 text-xs text-gray-500">
                                {project.tech}
                            </p>
                        )}
                    </div>
                    <span
                        className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-wide ${
                            project.visibility === "Public"
                                ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                                : "border-gray-700 bg-gray-900 text-gray-400"
                        }`}
                    >
                        {project.visibility}
                    </span>
                </div>

                <p className="mt-3 text-sm text-gray-400">
                    {project.details ?? project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                        <span
                            key={t}
                            className="rounded-md border border-emerald-400/20 bg-emerald-500/5 px-2 py-1 text-xs text-emerald-300"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 hover:text-white transition-colors"
                    >
                        View project <ArrowUpRight className="size-4" />
                    </a>
                )}

                {project.visibility === "Private" && !project.link && (
                    <p className="mt-3 text-xs text-gray-500">
                        This is a private or client-facing build. I’m happy to walk
                        through the architecture and decisions on request.
                    </p>
                )}
            </div>
        </div>
    );
}
