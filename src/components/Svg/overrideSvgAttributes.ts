/// <reference types="astro/astro-jsx" />

import { type SVGAttributes } from "../../types";
import { parse, render } from "ultrahtml";

const EMPTY_STRING_ERR = "`svgSource` must have content";
const MUST_START_WITH_SVG = "`svgSource` must begin with `<svg`";

export async function overrideSvgAttributes(
  svgSource: string,
  attributeOverrides?: SVGAttributes
): Promise<string> {
  if (!svgSource) {
    throw new Error(EMPTY_STRING_ERR);
  }
  if (!svgSource.trimStart().startsWith("<svg")) {
    throw new Error(MUST_START_WITH_SVG);
  }
  const doc = parse(svgSource) as unknown;

  if (!doc.children || !doc.children.length) {
    throw "bleh";
  }

  if (attributeOverrides) {
    // override the svg attributes with ones passed to `Svg`
    Object.assign(doc.children[0].attributes, attributeOverrides);
  }

  const contents = await render(doc);

  return contents.trim();
}
