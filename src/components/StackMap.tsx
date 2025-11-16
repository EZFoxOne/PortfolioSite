// src/components/StackMap.tsx

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

export function StackMap() {
    return (
        <div className="card p-5 md:p-6 space-y-4">
            <header className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-lime-300/80 uppercase">
                    Tech Stack
                </p>
                <p className="text-sm text-gray-300">
                    The layers I usually ship with, broken down by responsibility.
                </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
                {STACK_SECTIONS.map((section) => (
                    <div
                        key={section.title}
                        className="rounded-xl border border-gray-800 bg-gray-950/70 px-3.5 py-3.5"
                    >
                        <div className="flex items-center justify-between gap-2">
                            <h3 className="text-sm font-semibold text-white">
                                {section.title}
                            </h3>
                        </div>
                        <p className="mt-1 text-[11px] uppercase tracking-wide text-gray-500">
                            {section.note}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                            {section.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-md border border-gray-700 bg-gray-900/80 px-2.5 py-1 text-[11px] text-gray-200"
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
