import FadeIn from "@/components/motion/FadeIn";
import { Code, Hammer, Rocket, Sprout, Star } from "lucide-react";

const TIMELINE = [
    {
        year: "2025",
        title: "Independent Builder",
        description:
            "Working full-time on open-source tools, blockchain systems, and automation that saves humans from themselves. Currently focused on Persona — a cross-server Discord game layer — plus a rotating cast of Solana experiments.",
        icon: <Rocket className="size-4 text-primary" />,
    },
    {
        year: "2023–2024",
        title: "Full-Stack Developer & System Designer",
        description:
            "Shipped everything from on-chain lottery programs with Anchor + VRF to real-time dashboards and multi-server Discord systems. Learned to design architectures that survive actual usage, not just demos.",
        icon: <Code className="size-4 text-primary" />,
    },
    {
        year: "2021–2022",
        title: "Transition from Field Engineering",
        description:
            "Moved from mechanical systems to software systems. Turns out the mindset is the same — diagnose the failure, design the fix, make it reliable. Just fewer steel-toe boots.",
        icon: <Hammer className="size-4 text-primary" />,
    },
    {
        year: "Earlier",
        title: "Builder by Instinct",
        description:
            "Started with hardware hacks and scrappy scripting. Fell into full-stack development the moment I realized I could automate basically anything.",
        icon: <Sprout className="size-4 text-primary" />,
    },
];

export default function About() {
    return (
        <div className="space-y-16">
            {/* ---------- INTRO ---------- */}
            <section className="text-center space-y-6">
                <FadeIn>
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/5 px-3 py-1 text-xs text-emerald-300">
                        <Star className="size-3.5" />
                        About the guy who won’t stop building things
                    </div>
                </FadeIn>

                <FadeIn delay={0.05}>
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Software engineer. Systems thinker. Perpetual tinkerer.
                    </h1>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="mx-auto max-w-3xl text-gray-400 leading-relaxed">
                        I build things that make other things behave. Sometimes that means an
                        on-chain lottery, sometimes a Discord economy, sometimes a UI that
                        finally stops stuttering. The mission stays the same: take an idea,
                        wrestle with it until it works, and leave it cleaner than I found it.
                    </p>
                </FadeIn>
            </section>

            {/* ---------- PHOTO / VISUAL ---------- */}
            <section className="grid place-items-center">
                <FadeIn delay={0.1}>
                    <div className="flex flex-col items-center">
                        <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-emerald-400/40 shadow-glow">
                            <img
                                src="/cole_picture.jpg"
                                alt="Cole Carey portrait"
                                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                                onError={(e) =>
                                    ((e.target as HTMLImageElement).src =
                                        "https://placehold.co/300x300/0f172a/10b981?text=C")
                                }
                            />
                        </div>

                        <p className="mt-3 text-sm text-gray-500">
                            Built with React, TypeScript, and too many late-night commits.
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* ---------- TIMELINE ---------- */}
            <section className="max-w-3xl mx-auto space-y-10">
                <FadeIn>
                    <h2 className="text-2xl font-semibold text-white text-center">
                        My Path So Far
                    </h2>
                </FadeIn>

                <ul className="relative border-l border-gray-800 pl-6">
                    {TIMELINE.map((item, i) => (
                        <FadeIn key={item.title} delay={i * 0.08}>
                            <li className="mb-10 ml-2">
                                <div className="absolute -left-[10px] mt-1 flex size-5 items-center justify-center rounded-full border border-emerald-400/40 bg-gray-900">
                                    {item.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                                        {item.year}
                                        <span className="text-gray-500 font-normal">
                                            {item.title}
                                        </span>
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </li>
                        </FadeIn>
                    ))}
                </ul>
            </section>

            {/* ---------- CLOSING CTA ---------- */}
            <section className="relative text-center">
                <FadeIn>
                    <div className="card p-8 md:p-10 mx-auto max-w-2xl space-y-4">
                        <h3 className="text-xl font-semibold text-white">
                            What’s next?
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            I’m continuing to build high-performance systems — on-chain,
                            off-chain, and everything in between. If you want to collaborate,
                            want something built, or just want to talk shop, I’m always down.
                        </p>

                        <div className="flex justify-center gap-3">
                            <a
                                href="mailto:cole.carey@outlook.com"
                                className="btn inline-flex items-center gap-2"
                            >
                                Contact Me
                            </a>
                            <a
                                href="https://github.com/EZFoxone"
                                target="_blank"
                                rel="noreferrer"
                                className="btn glow inline-flex items-center gap-2"
                            >
                                View GitHub
                            </a>
                        </div>
                    </div>
                </FadeIn>

                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 -bottom-12 h-24 blur-3xl bg-emerald-500/20 opacity-30"
                />
            </section>
        </div>
    );
}
