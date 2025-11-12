// src/routes.tsx
import { lazy, Suspense, type PropsWithChildren, useEffect } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    ScrollRestoration,
    useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SiteLayout from "@/components/layout/SiteLayout";

// ---- Lazy-loaded pages (code-splitting keeps Home fast) ----
const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const About = lazy(() => import("@/pages/About"));

// ---- Suspense fallback shown during lazy chunk load ----
function Fallback() {
    return (
        <div className="min-h-[50vh] grid place-items-center">
            <div className="animate-pulse text-gray-400">Loading…</div>
        </div>
    );
}

// ---- Page wrapper: sets <title>/meta and provides consistent layout ----
type PageProps = PropsWithChildren<{
    title: string;
    description?: string;
}>;

function Page({ title, description, children }: PageProps) {
    const fullTitle = `${title} • Cole Carey`;
    const desc =
        description ??
        "Portfolio and projects by Cole Carey — full-stack developer and Solana engineer.";

    return (
        <>
            <Helmet>
                <title>{fullTitle}</title>
                <meta name="description" content={desc} />
                <meta property="og:title" content={fullTitle} />
                <meta property="og:description" content={desc} />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content={fullTitle} />
                <meta property="twitter:description" content={desc} />
            </Helmet>

            <Suspense fallback={<Fallback />}>{children}</Suspense>
        </>
    );
}

// ---- Hash + top scroll behavior ----
// - If URL has #hash, smooth-scroll to that element
// - Else restore to top on route changes (ScrollRestoration handles history)
function HashScroller() {
    const { hash, key } = useLocation();

    useEffect(() => {
        if (hash) {
            // slight delay to ensure content has rendered
            const id = hash.replace(/^#/, "");
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }
        // no hash or element not found: jump to top
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, [hash, key]);

    return null;
}

// ---- Route tree ----
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <SiteLayout donateAddress="BUFJUViLHwEPigY7jeZyTkjQxcVU9xUkmCqQfXB9XKFk" brand="Cole Carey">
                <Page title="Home" description="Home base for projects, experiments, and contact.">
                    <Home />
                </Page>
                <ScrollRestoration />
                <HashScroller />
            </SiteLayout>
        ),
    },
    {
        path: "/projects",
        element: (
            <SiteLayout donateAddress="BUFJUViLHwEPigY7jeZyTkjQxcVU9xUkmCqQfXB9XKFk" brand="Cole Carey">
                <Page
                    title="Projects"
                    description="Selected work: on-chain apps, Discord systems, and DeFi tooling."
                >
                    <Projects />
                </Page>
                <ScrollRestoration />
                <HashScroller />
            </SiteLayout>
        ),
    },
    {
        path: "/about",
        element: (
            <SiteLayout donateAddress="BUFJUViLHwEPigY7jeZyTkjQxcVU9xUkmCqQfXB9XKFk" brand="Cole Carey">
                <Page
                    title="About"
                    description="Background, interests, and the way I approach engineering."
                >
                    <About />
                </Page>
                <ScrollRestoration />
                <HashScroller />
            </SiteLayout>
        ),
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}
