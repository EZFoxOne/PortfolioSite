import { Helmet } from "react-helmet-async";

/**
 * Global SEO defaults. Route-level titles/descriptions still win,
 * but these provide site-wide fallbacks and social tags.
 *
 * Configure via Vite env:
 * - VITE_SITE_URL         e.g. https://projectcarey.dev
 * - VITE_SITE_NAME        e.g. Cole Carey | Software Engineer
 * - VITE_SITE_DESCRIPTION Short default site description
 * - VITE_TWITTER_HANDLE   e.g. @projectcarey (no spaces)
 * - VITE_OG_IMAGE         absolute URL to a 1200x630 image
 */
export default function SeoDefaults() {
    const siteUrl =
        import.meta.env.VITE_SITE_URL?.replace(/\/+$/, "") ?? "https://example.com";
    const siteName = import.meta.env.VITE_SITE_NAME ?? "Cole Carey | Software Engineer";
    const siteDesc =
        import.meta.env.VITE_SITE_DESCRIPTION ??
        "Portfolio and projects by Cole Carey — full-stack developer and Solana engineer.";
    const twitter = import.meta.env.VITE_TWITTER_HANDLE ?? "";
    const ogImage =
        import.meta.env.VITE_OG_IMAGE ??
        `${siteUrl}/og-default.jpg`;

    // Basic JSON-LD (Organization/Person hybrid for a personal site)
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Cole Carey",
        url: siteUrl,
        sameAs: [
            "https://github.com/projectcarey",
            twitter ? `https://twitter.com/${twitter.replace(/^@/, "")}` : undefined,
        ].filter(Boolean),
        jobTitle: "Software Engineer",
        description: siteDesc,
    };

    return (
        <Helmet>
            {/* Canonical defaults to site root; per-route can override if needed */}
            <link rel="canonical" href={siteUrl} />

            {/* Global title fallback */}
            <title>{siteName}</title>
            <meta name="description" content={siteDesc} />

            {/* Open Graph */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteName} />
            <meta property="og:description" content={siteDesc} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            {twitter && <meta name="twitter:site" content={twitter} />}
            <meta name="twitter:title" content={siteName} />
            <meta name="twitter:description" content={siteDesc} />
            <meta name="twitter:image" content={ogImage} />

            {/* PWA-ish bits (optional if you add a manifest later) */}
            <meta name="theme-color" content="#10b981" />

            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
}
