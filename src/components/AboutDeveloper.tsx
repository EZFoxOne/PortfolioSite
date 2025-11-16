import { Sparkles, Zap, Workflow, Wand2 } from "lucide-react";
import clsx from "clsx";

export function AboutDeveloper({ className }: { className?: string }) {
    return (
        <div className={clsx("card p-6 md:p-7 space-y-5 flex flex-col", className)}>
            <div className="space-y-1">
                <p className="text-[11px] font-semibold tracking-[0.22em] text-emerald-300 uppercase flex items-center gap-2">
                    <Sparkles className="size-3.5 text-emerald-300" />
                    About Me as a Developer
                </p>
                <p className="text-xs text-gray-500">
                    How I think about code, systems, and the work I like to do.
                </p>
            </div>

            <ul className="space-y-3 text-sm leading-relaxed text-gray-300 flex-grow">
                <li className="flex items-start gap-3">
                    <Zap className="mt-1 size-4 text-primary shrink-0" />
                    <p>
                        I like systems that stay simple at 2am. My approach is built on
                        clean architecture, predictable behavior, and fast iteration that
                        keeps momentum high.
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <Workflow className="mt-1 size-4 text-primary shrink-0" />
                    <p>
                        I enjoy taking loose, half-formed ideas and turning them into
                        working software — whether that’s a web app, a bot, or the glue
                        that finally makes two systems play nice.
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <Wand2 className="mt-1 size-4 text-primary shrink-0" />
                    <p>
                        Right now I’m focused on building React apps that just feel good:
                        quick to load, quick to respond, and smooth everywhere it matters.
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <Sparkles className="mt-1 size-4 text-primary shrink-0" />
                    <p>
                        I write code that’s honest and readable — no unnecessary
                        cleverness, no mystery. Most of my best work runs in private
                        environments, so I put real effort into the architecture, the
                        tradeoffs, and the “why” behind each decision.
                    </p>
                </li>

                <li className="flex items-start gap-3">
                    <Zap className="mt-1 size-4 text-primary shrink-0" />
                    <p>
                        If you need someone who can think in systems, ship quickly, and
                        keep things clean without losing the fun — that’s where I work
                        best.
                    </p>
                </li>
            </ul>
        </div>
    );
}
