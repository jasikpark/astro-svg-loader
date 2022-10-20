import { SVGAttributes } from "../../types.js";
import { overrideSvgAttributes } from "./overrideSvgAttributes.js";
import fc from "fast-check";
import { describe, expect, it } from "vitest";

describe("overrideSvgAtrributes", () => {
  it("should return the same output if no overrides are given", async () => {
    expect(await overrideSvgAttributes("<svg></svg>")).toBe("<svg></svg>");
    expect(await overrideSvgAttributes("<svg>")).toBe("<svg></svg>");
  });

  it("should strip leading and following whitespace", async () => {
    expect(await overrideSvgAttributes("  <svg>")).toBe("<svg></svg>");
    expect(await overrideSvgAttributes("    <svg></svg>")).toBe("<svg></svg>");
  });

  it("should override height and width", async () => {
    expect(
      await overrideSvgAttributes(`<svg height="100" width=40></svg>`, {
        height: 400,
        width: 20,
      })
    ).toBe('<svg height=\\"400\\" width=\\"20\\"></svg>');
  });

  it("should throw an error if no svg is passed", async () => {
    await expect(
      async () => await overrideSvgAttributes("")
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      '"`svgSource` must have content"'
    );
  });

  it("should throw an error if svgSource doesn't start with `<svg`", async () => {
    await expect(
      async () => await overrideSvgAttributes("<div></div>")
    ).rejects.toThrowErrorMatchingInlineSnapshot(
      '"`svgSource` must begin with `<svg`"'
    );
  });

  it("should not throw", () => {
    fc.assert(
      fc.property(
        fc.string(),
        fc.record<SVGAttributes>({
          height: fc.option(fc.integer()),
          width: fc.option(fc.integer()),
        }),
        async (svgSource, overrides) => {
          await overrideSvgAttributes(svgSource, overrides);
        }
      )
    );
  });
});
