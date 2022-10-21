export type SVGAttributes = Omit<
  astroHTML.JSX.SVGAttributes,
  "client:list" | "set:text" | "set:html" | "is:raw"
>;
