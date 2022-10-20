/// <reference types="astro/astro-jsx" />

import type { SVGAttributes } from "../../types";
import { html, transform } from "ultrahtml";
import swap from "ultrahtml/transformers/swap";
import assert from "tiny-invariant";

const EMPTY_STRING_ERR = "`svgSource` must have content";
const MUST_START_WITH_SVG = "`svgSource` must begin with `<svg`";

export async function overrideSvgAttributes(
  svgSource: string,
  attributeOverrides: SVGAttributes = {}
): Promise<string> {
  if (!svgSource) {
    throw new Error(EMPTY_STRING_ERR);
  }
  if (!svgSource.trimStart().startsWith("<svg")) {
    throw new Error(MUST_START_WITH_SVG);
  }

  const output = await transform(svgSource, [
    swap({
      svg: (originalProps = {}, children) => {
        const mergedProps = Object.fromEntries(
          Object.entries({
            ...originalProps,
            ...attributeOverrides,
          }).filter(([, value]) => !!value)
        );
        return html`<svg ...${mergedProps}>${children}</svg>`;
      },
    }),
  ]);

  return output.trim();
}
