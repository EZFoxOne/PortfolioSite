import FadeIn from "@/components/motion/FadeIn";

export type Project = {
    title: string;
    summary: string;
    tags: string[];
    visibility: "Public" | "Private";
    tech?: string;
    link?: string;
    details?: string;
};

type ProjectCardProps = {
    project: Project;
    index?: number;
    onClick?: () => void;
};

export function ProjectCard({ project, index = 0, onClick }: ProjectCardProps) {
    return (
        <FadeIn delay={index * 0.05}>
            <li
                onClick={onClick}
                className="card p-5 cursor-pointer hover-lift hover-glow-soft"
            >
                <div className="flex items-start justify-between gap-2">
                    <h2 className="text-lg font-semibold text-white">
                        {project.title}
                    </h2>
                    <span
                        className={`rounded-full border px-2 py-0.5 text-[10px] uppercase tracking-wide ${
                            project.visibility === "Public"
                                ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                                : "border-gray-700 bg-gray-900 text-gray-400"
                        }`}
                    >
                        {project.visibility}
                    </span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{project.summary}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((t) => (
                        <span
                            key={t}
                            className="rounded-md border border-emerald-400/20 bg-emerald-500/5 px-2 py-1 text-xs text-emerald-300 pill-hover"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </li>
        </FadeIn>
    );
}
