import { type Registry } from "shadcn/registry";

import { components } from "./registry-components";
import { examples } from "./registry-examples";
import { lib } from "./registry-lib";

export const registry = {
  name: "mohammadkaif/ui",
  homepage: "https://mohammadkaif.com/ui",
  items: [
    ...lib,
    ...components,

    // Internal use only
    ...examples,
  ],
} satisfies Registry;
