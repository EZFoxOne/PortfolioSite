import { useState } from "react";
import { Github, Mail, Menu, X, WalletMinimal } from "lucide-react";
import { Link } from "react-router-dom";
import DonateModal from "@/components/donate/DonateModal";

type Props = {
    brand?: string;
    donateAddress?: string;
};

export default function SiteHeader({
                                       brand = "Cole Carey",
                                       donateAddress = "BUFJUViLHwEPigY7jeZyTkjQxcVU9xUkmCqQfXB9XKFk",
                                   }: Props) {
    const [open, setOpen] = useState(false);
    const [showDonate, setShowDonate] = useState(false);

    const navItems = [
        { label: "Home", to: "/" },
        { label: "Projects", to: "/projects" },
        { label: "About", to: "/about" },
    ];

    const DonateButton = (
        <button
            onClick={() => setShowDonate(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-500/20 hover:text-white transition-colors"
        >
            <WalletMinimal className="size-4" />
            Donate
        </button>
    );

    return (
        <>
            <header className="sticky top-0 z-50 border-b border-gray-800/80 bg-background/70 backdrop-blur">
                <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <Link to="/" className="flex items-center gap-2 hover:opacity-90">
                            <div className="size-6 rounded-lg bg-emerald-500/20 ring-1 ring-emerald-400/40 shadow-glow" />
                            <span className="text-sm font-semibold tracking-tight text-white">
                {brand}
              </span>
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-6 md:flex">
                        {navItems.map((n) => (
                            <Link
                                key={n.to}
                                to={n.to}
                                className="text-sm text-gray-300 hover:text-white transition-colors"
                            >
                                {n.label}
                            </Link>
                        ))}

                        <div className="mx-2 h-4 w-px bg-gray-800" />

                        <a
                            href="mailto:cole.carey@outlook.com"
                            className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                        >
                            <Mail className="size-4" />
                            Contact
                        </a>

                        <a
                            href="https://github.com/projectcarey"
                            target="_blank"
                            rel="noreferrer"
                            className="text-sm text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
                        >
                            <Github className="size-4" />
                            GitHub
                        </a>

                        {DonateButton}
                    </nav>

                    {/* Mobile controls */}
                    <div className="flex items-center gap-2 md:hidden">
                        {DonateButton}
                        <button
                            aria-label="Open menu"
                            onClick={() => setOpen((v) => !v)}
                            className="inline-flex items-center justify-center rounded-lg border border-gray-700/70 bg-gray-900/40 p-2 hover:bg-gray-800/60"
                        >
                            {open ? <X className="size-5" /> : <Menu className="size-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile sheet */}
                {open && (
                    <div className="border-t border-gray-800/80 bg-background/95 md:hidden">
                        <nav className="mx-auto max-w-6xl px-4 py-3">
                            <ul className="flex flex-col gap-2">
                                {navItems.map((n) => (
                                    <li key={n.to}>
                                        <Link
                                            to={n.to}
                                            onClick={() => setOpen(false)}
                                            className="block rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-gray-900/60 hover:text-white"
                                        >
                                            {n.label}
                                        </Link>
                                    </li>
                                ))}
                                <li className="mt-2 flex items-center gap-3">
                                    <a
                                        href="mailto:cole.carey@outlook.com"
                                        className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-gray-900/60 hover:text-white"
                                    >
                                        <Mail className="size-4" />
                                        Contact
                                    </a>
                                    <a
                                        href="https://github.com/projectcarey"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-300 hover:bg-gray-900/60 hover:text-white"
                                    >
                                        <Github className="size-4" />
                                        GitHub
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </header>

            {/* Donate Modal */}
            {showDonate && (
                <DonateModal
                    address={donateAddress}
                    onClose={() => setShowDonate(false)}
                    amountSol={0.25}
                />
            )}
        </>
    );
}
