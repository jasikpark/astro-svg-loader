/// <reference types="astro/astro-jsx" />

import type { SVGAttributes } from "../../types";
import { type DocumentNode, type Node, parse, render } from "ultrahtml";

// Type guard to check if a node is an ElementNode with SVG tag
function isSvgElementNode(node: Node): node is Node & {
  type: 1;
  name: string;
  attributes: Record<string, string>;
} {
  const elementNode = node as {
    type: number;
    name?: string;
  };
  return (
    elementNode.type === 1 &&
    typeof elementNode.name === "string" &&
    /svg/i.test(elementNode.name)
  );
}

const EMPTY_STRING_ERR = "`svgSource` must have content";
const MUST_START_WITH_SVG = "`svgSource` must begin with `<svg`";

export async function overrideSvgAttributes(
  svgSource: string,
  attributeOverrides: SVGAttributes = {},
): Promise<string> {
  if (!svgSource) {
    throw new Error(EMPTY_STRING_ERR);
  }

  if (!svgSource.trimStart().toLowerCase().replace(/<!--.*?-->\s*/gs, "").startsWith("<svg")) {
    throw new Error(MUST_START_WITH_SVG);
  }

  const doc = parse(svgSource) as DocumentNode;

  const firstSVGNode = (doc.children as Node[]).find(isSvgElementNode);

  if (!firstSVGNode) {
    throw new Error("No SVG element found in the provided source");
  }

  const mergedAttributes = Object.fromEntries(
    Object.entries({
      ...firstSVGNode.attributes,
      ...attributeOverrides,
    }).filter(([, value]) => Boolean(value)),
  ) as Record<string, string>;

  const updatedSVG: Node = {
    ...firstSVGNode,
    attributes: mergedAttributes,
  };

  return render(updatedSVG);
}
