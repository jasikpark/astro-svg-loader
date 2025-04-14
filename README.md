# `@jasikpark/astro-svg-loader`

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader?ref=badge_shield) [![Tested with fast-check](https://img.shields.io/badge/tested%20with-fast%E2%80%91check%20%F0%9F%90%92-%23282ea9?flat&logoSize=auto&labelColor=%231b1b1d)](https://fast-check.dev/)

This package allows you to import SVGs as Astro components, using
[@natemoo-re](https://github.com/natemoo-re)'s `ultrahtml` and vite's support
for
[raw imports](https://vitejs.dev/guide/assets.html#importing-asset-as-string) to
do the trick.

Taking inspiration from <https://css-tricks.com/pretty-good-svg-icon-system/>
that holds that icons should always be inlined.

Usage:

Peer deps are `astro`

```
npm add -D @jasikpark/astro-svg-loader
```

```
yarn add -D @jasikpark/astro-svg-loader
```

```
pnpm add -D @jasikpark/astro-svg-loader
```

then in an Astro component:

```astro
---
import Svg from "@jasikpark/astro-svg-loader";
---

<Svg
  src={import("#assets/my-cool-illustration.svg?raw")}
  aria-label="Cool illustration of an abstract nebula"
/>
```

Be sure to use a raw import: `?raw`, or you'll import the URL rather than the
SVG source.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/jasikpark/astro-svg-loader/)

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader?ref=badge_large)

## Inspiration

- [astro-icon](https://github.com/natemoo-re/astro-icon)
- [svgr](https://react-svgr.com/)
