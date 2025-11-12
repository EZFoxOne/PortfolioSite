// scripts/gen-icons.mjs
import sharp from "sharp";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const SRC = resolve("public/brand/logo.svg");

// Colors aligned with your Tailwind theme:
const BG = "#0b1324";     // background (near-black)
const EMERALD = "#10b981"; // not used directly here but kept for tweaks

const OUTS = [
    // Standard PWA icons
    { file: "public/icon-192.png", size: 192, maskable: false },
    { file: "public/icon-512.png", size: 512, maskable: false },

    // Maskable variants (content inset so Android masks don’t clip)
    { file: "public/icon-192-maskable.png", size: 192, maskable: true },
    { file: "public/icon-512-maskable.png", size: 512, maskable: true },

    // Apple touch icon (optional but recommended)
    { file: "public/apple-touch-icon.png", size: 180, maskable: true },
];

const svg = await readFile(SRC);

for (const { file, size, maskable } of OUTS) {
    // Render SVG to a transparent PNG at the target size
    // Then composite onto a solid background so icons look good on any surface.
    // For maskable, we inset content ~12% to survive rounded masks.
    const inset = maskable ? Math.round(size * 0.12) : Math.round(size * 0.06);
    const inner = size - inset * 2;

    // Compose: background square + centered SVG raster
    const bg = await sharp({
        create: { width: size, height: size, channels: 4, background: BG },
    })
        .png()
        .toBuffer();

    const rendered = await sharp(svg)
        .resize(inner, inner, { fit: "contain" })
        .png()
        .toBuffer();

    const out = await sharp(bg)
        .composite([{ input: rendered, top: inset, left: inset }])
        .png()
        .toFile(file);

    console.log(`✓ ${file}`);
}

// Optional Windows/legacy ICO (from a 48px render)
await sharp(svg).resize(48, 48).png().toFile("public/favicon-48.png");
await sharp("public/favicon-48.png")
    .toFormat("ico")
    .toFile("public/favicon.ico")
    .then(() => console.log("✓ public/favicon.ico"));
