import FadeIn from "@/components/motion/FadeIn";
import { Code, Hammer, Rocket, Sprout, Star } from "lucide-react";

const TIMELINE = [
    {
        year: "2025",
        title: "Independent Builder",
        description:
            "Working full-time on open-source projects, blockchain tools, and automation systems. Currently developing Persona, a cross-server Discord game layer, and experimental Solana integrations.",
        icon: <Rocket className="size-4 text-primary" />,
    },
    {
        year: "2023–2024",
        title: "Full-Stack Developer & System Designer",
        description:
            "Built a range of production systems — from Solana lottery smart contracts with Anchor + VRF to real-time web applications and analytics dashboards. Established modular patterns for multi-server Discord bots.",
        icon: <Code className="size-4 text-primary" />,
    },
    {
        year: "2021–2022",
        title: "Transition from Field Engineering",
        description:
            "Shifted from mechanical systems and process engineering to software development, combining practical problem-solving with system design thinking.",
        icon: <Hammer className="size-4 text-primary" />,
    },
    {
        year: "Earlier",
        title: "Builder by Instinct",
        description:
            "Started with hardware, scripting, and automation before moving into full-stack web development. Always chasing efficiency, clarity, and a bit of fun in every project.",
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
                        About Cole Carey
                    </div>
                </FadeIn>

                <FadeIn delay={0.05}>
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Software engineer, problem-solver, and systems thinker.
                    </h1>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="mx-auto max-w-3xl text-gray-400 leading-relaxed">
                        I build tools that make digital systems behave better — faster, more reliable,
                        and more transparent. Whether I’m writing code for an on-chain lottery,
                        architecting a Discord economy, or refining UI performance, the goal’s the
                        same: turn good ideas into working reality.
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
                            Always building — one project at a time.
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
                                        <span className="text-gray-500 font-normal">{item.title}</span>
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
                            I’m focused on continuing to build high-performance applications
                            and on-chain systems that reward creativity and efficiency.
                            Open to collaboration, consulting, or just swapping ideas with
                            other builders.
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
