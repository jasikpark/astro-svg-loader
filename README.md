# `@jasikpark/astro-svg-loader`

This package allows you to import SVGs as Astro components, using
[@natemoo-re](https://github.com/natemoo-re)'s `ultrahtml` and vite's support
for
[raw imports](https://vitejs.dev/guide/assets.html#importing-asset-as-string) to
do the trick.

Usage:

Peer deps are `astro`

```
// or pnpm or yarn
npm add -D github:jasikpark/astro-svg-loader
```

then in an Astro component:

```astro
---
import Svg from "astro-svg-loader";
---

<Svg
  src={import("@assets/my-cool-illustration.svg?raw")}
  aria-label="Cool illustration of an abstract nebula"
/>
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/jasikpark/astro-svg-loader/)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader?ref=badge_shield)


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fjasikpark%2Fastro-svg-loader?ref=badge_large)