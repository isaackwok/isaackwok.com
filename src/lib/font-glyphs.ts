import { readdir, readFile } from "node:fs/promises";
import { join, extname } from "node:path";
import { parse } from "yaml";
import { lookupAlbum } from "./itunes";

const TEXT_EXT = new Set([
    ".astro",
    ".css",
    ".js",
    ".md",
    ".mdx",
    ".mjs",
    ".ts",
    ".yaml",
    ".yml",
]);

/*
 * formatArticleDate emits English month names that are not in the templates.
 * The Latin letters and digits cover those dates plus anything generated
 * (reading time, the copyright year) without depending on a scan of tests.
 */
const GENERATED =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
    "JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember" +
    // PageShell writes the copyright as &copy;, so the character is not in the source text.
    "©";

export function glyphsFromSources(texts: string[]): string {
    const chars = new Set<string>(GENERATED);
    for (const text of texts) {
        for (const ch of text) {
            if (ch > " ") chars.add(ch);
        }
    }
    return [...chars].sort().join("");
}

async function readTextFiles(dir: string): Promise<string[]> {
    const texts: string[] = [];
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
        const path = join(dir, entry.name);
        if (entry.isDirectory()) {
            texts.push(...(await readTextFiles(path)));
        } else if (TEXT_EXT.has(extname(entry.name))) {
            texts.push(await readFile(path, "utf8"));
        }
    }
    return texts;
}

/*
 * Google's CJK CSS is hundreds of unicode-range slices. Inlining all of
 * them makes every page carry that stylesheet, and the slice comments are
 * not reliable enough to preload only Latin. Ask for the characters the
 * site renders instead: one small file per weight, same shapes.
 * Track titles are not in the repo — they come from the iTunes lookup.
 */
export async function siteFontGlyphs(root = "src"): Promise<string> {
    const texts = await readTextFiles(root);
    const albums =
        (parse(await readFile(join(root, "data/music.yaml"), "utf8")) as
            | { itunesId: number; country: string }[]
            | null) ?? [];
    for (const album of albums) {
        const { tracks } = await lookupAlbum(album.itunesId, album.country);
        for (const track of tracks) texts.push(track.name);
    }
    return glyphsFromSources(texts);
}
