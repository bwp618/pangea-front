const sveltePreprocess = require("svelte-preprocess");

const preprocess = sveltePreprocess({
  defaults: {
    script: "typescript",
  },
  postcss: true,
});

module.exports = {
  preprocess,
};
