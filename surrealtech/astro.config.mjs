import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import clerk from "@clerk/astro";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), icon()],
  
  output: "server",
  adapter: vercel(),
});