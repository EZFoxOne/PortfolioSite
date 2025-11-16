// src/components/StackMap.tsx
import clsx from "clsx";

type StackMapProps = {
    className?: string;
};

const STACK_SECTIONS = [
    {
        title: "Frontend",
        note: "UI & client experience",
        items: ["React", "TypeScript", "Vite", "TailwindCSS"],
    },
    {
        title: "Backend",
        note: "APIs & services",
        items: ["Node", "Python"],
    },
    {
        title: "Solana / DeFi",
        note: "On-chain work",
        items: ["Anchor", "Umi", "Jupiter APIs"],
    },
    {
        title: "Tooling",
        note: "Infra & persistence",
        items: ["Docker", "Drizzle ORM", "Redis", "SQLite/Postgres"],
    },
];

export function StackMap({ className }: StackMapProps) {
    return (
        <div className={clsx("card p-6 md:p-7 space-y-5 flex flex-col", className)}>
            {/* Header */}
            <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-300 uppercase">
                    Tech Stack
                </p>
                <p className="text-xs text-gray-500">
                    The layers I usually ship with, broken down by responsibility.
                </p>
            </div>

            {/* Grid of stack tiles */}
            <div className="grid gap-4 md:grid-cols-2 flex-grow">
                {STACK_SECTIONS.map((section) => (
                    <div
                        key={section.title}
                        className="rounded-xl border border-gray-800 bg-gray-900/40 p-4 space-y-2"
                    >
                        <div>
                            <p className="text-sm font-semibold text-white">
                                {section.title}
                            </p>
                            <p className="text-[11px] uppercase tracking-wide text-gray-500">
                                {section.note}
                            </p>
                        </div>

                        <div className="mt-1 flex flex-wrap gap-1.5">
                            {section.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-md border border-gray-700 bg-gray-950/80 px-2.5 py-1 text-[11px] text-gray-200 pill-hover"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
