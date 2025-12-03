import { type PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SeoDefaults from "@/components/seo/SeoDefaults";

type SiteLayoutProps = {
    donateAddress?: string;
    brand?: string;
    maxWidth?:
        | "sm"
        | "md"
        | "lg"
        | "xl"
        | "2xl"
        | "3xl"
        | "4xl"
        | "5xl"
        | "6xl"
        | "7xl";
};

export default function SiteLayout({
                                       children,
                                       donateAddress = "BUFJUViLHwEPigY7jeZyTkjQxcVU9xUkmCqQfXB9XKFk",
                                       brand = "Cole Carey",
                                       maxWidth = "6xl",
                                   }: PropsWithChildren<SiteLayoutProps>) {
    return (
        <div className="min-h-screen bg-background text-gray-100">
            {/* Site-wide SEO fallbacks (route-level meta still override) */}
            <SeoDefaults />

            <SiteHeader brand={brand} donateAddress={donateAddress} />

            <main className={`mx-auto w-full px-4 py-8 max-w-${maxWidth}`}>
                {children}
            </main>

            <footer className="border-t border-gray-800/70">
                <div
                    className={`mx-auto w-full px-4 py-6 text-sm text-gray-400 max-w-${maxWidth}`}
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
                        <p>
                            © {new Date().getFullYear()} {brand}. Built with React, TypeScript, and too many late-night commits.
                        </p>
                        <Link
                            to="/privacy"
                            className="text-gray-400 hover:text-emerald-300 transition-colors underline"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
