import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  integrations: [clerk()],
  
  output: "server",
  adapter: vercel(),
});