// src/components/CurrentlyWorkingOn.tsx
import { Hammer, Rocket, Code2, Sparkles } from "lucide-react";
import clsx from "clsx";

type CurrentlyWorkingOnProps = {
    className?: string;
};

const ITEMS = [
    {
        label: "DJ Karaoke System (client-facing)",
        description:
            "A full featured DJ & patron interface: mobile-first song requests, fuzzy search, live request queue, and a DJ control panel for managing events, singers, and flow.",
    },
    {
        label: "This portfolio",
        description:
            "Refining copy, layout, and motion so it feels like a real product surface, not just a static resume page.",
    },
    {
        label: "Client-ready React sites",
        description:
            "Fast, responsive single-page apps with clean state management, predictable data flows, and minimal surface area.",
    },
    {
        label: "Automation & tooling",
        description:
            "Internal tools, bots, and Solana-adjacent workflows that quietly keep systems moving without humans babysitting them.",
    },
];

export function CurrentlyWorkingOn({ className }: CurrentlyWorkingOnProps) {
    return (
        <div
            className={clsx(
                "card p-6 md:p-7 space-y-4 hover-lift hover-glow-soft",
                className,
            )}
        >
            <div className="flex items-center justify-between gap-3">
                <div className="space-y-1">
                    <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-300 uppercase flex items-center gap-2">
                        <Hammer className="size-3.5 text-emerald-300" />
                        Currently Working On
                    </p>
                    <p className="text-xs text-gray-500">
                        A quick snapshot of what I’m actively building and improving.
                    </p>
                </div>
                <Rocket className="size-5 text-primary hidden sm:block" />
            </div>

            <ul className="space-y-3 text-sm text-gray-300">
                {ITEMS.map((item) => (
                    <li
                        key={item.label}
                        className="flex items-start gap-3"
                    >
                        <Code2 className="mt-1 size-4 text-primary shrink-0" />
                        <div>
                            <p className="font-medium text-gray-100 flex items-center gap-2">
                                {item.label}
                                {item.label.includes("DJ Karaoke") && (
                                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wide text-emerald-300">
                                        <Sparkles className="size-3" />
                                        Primary Focus
                                    </span>
                                )}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">
                                {item.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
