import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "public",
      assets: "public",
    }),
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    files: {
      assets: "client/static",
      hooks: "client/src/hooks",
      lib: "client/src/lib",
      routes: "client/src/routes",
      serviceWorker: "client/src/service-worker",
      template: "client/src/app.html",
    },
  },
};
