// Do not write code directly here, instead use the `src` folder!
// Then, use this file to export everything you want your user to access.

// TS has issues validating that Astro components exist when imported.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Svg from "./src/components/Svg/Svg.astro";

export default Svg;
