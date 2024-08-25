import { defineConfig } from 'astro/config';
import node from "@astrojs/node";
const LIVE_URL = "https://moonlitautumn.github.io";
const BASE_URL = "https://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site: LIVE_URL,
  base: 'webbb',
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});