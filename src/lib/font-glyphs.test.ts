import { describe, expect, it } from "vitest";
import { glyphsFromSources } from "./font-glyphs";

describe("glyphsFromSources", () => {
    it("keeps visible characters and the generated English date names", () => {
        const glyphs = glyphsFromSources(["關於 — hello"]);
        expect(glyphs).toContain("關");
        expect(glyphs).toContain("於");
        expect(glyphs).toContain("—");
        for (const ch of "July") expect(glyphs).toContain(ch);
        expect(glyphs).toContain("0");
        expect(glyphs).toContain("©");
    });

    it("drops whitespace and stays stable", () => {
        const glyphs = glyphsFromSources(["b\na", "a"]);
        expect(glyphs).not.toContain(" ");
        expect(glyphs).not.toContain("\n");
        expect(glyphs).toBe(glyphsFromSources(["a", "b\na"]));
    });
});