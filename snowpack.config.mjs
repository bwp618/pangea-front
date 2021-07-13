/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: "/", static: true },
    src: { url: "/dist" },
  },
  alias: {
    $: "./src/lib",
    "@": "./src/routes",
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-dotenv",
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    bundle: true,
    minify: true,
    splitting: true,
    /*target: 'es2018',*/
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    port: 5000,
    output: "stream",
    hmr: true,
    hmrErrorOverlay: true,
  },
  buildOptions: {
    /* ... */
  },
};
