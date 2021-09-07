import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "../../client/src/hooks.ts";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":"/."} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: "/./_app/start-6341b5a4.js",
			css: ["/./_app/assets/start-8077b9bf.css"],
			js: ["/./_app/start-6341b5a4.js","/./_app/chunks/vendor-432035a5.js","/./_app/chunks/singletons-12a22614.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => "/./_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: /** @param {Error & {frame?: string}} error */ (error) => {
			if (error.frame) {
				console.error(error.frame);
			}
			console.error(error.stack);
			error.stack = options.get_stack(error);
		},
		hooks: get_hooks(user_hooks),
		hydrate: async ({ page }) => {
	const leaf = await page;
	return 'hydrate' in leaf ? !!leaf.hydrate : true;
},
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: async ({ page }) => !!(await page).prerender,
		read: settings.read,
		root,
		service_worker: null,
		router: async ({ page }) => {
	const leaf = await page;
	return 'router' in leaf ? !!leaf.router : true;
},
		ssr: async ({ page }) => {
	const leaf = await page;
	return 'ssr' in leaf ? !!leaf.ssr : true;
},
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

const d = decodeURIComponent;
const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.ico","size":1571,"type":"image/vnd.microsoft.icon"},{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"},{"file":"svelte-welcome.png","size":360807,"type":"image/png"},{"file":"svelte-welcome.webp","size":115470,"type":"image/webp"}],
	layout: "client/src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["client/src/routes/__layout.svelte", "client/src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/messages\/?$/,
						params: empty,
						a: ["client/src/routes/__layout.svelte", "client/src/routes/messages.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/register\/?$/,
						params: empty,
						a: ["client/src/routes/__layout.svelte", "client/src/routes/register.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/about\/?$/,
						params: empty,
						a: ["client/src/routes/__layout.svelte", "client/src/routes/about.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/login\/?$/,
						params: empty,
						a: ["client/src/routes/__layout.svelte", "client/src/routes/login.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\.json$/,
						params: empty,
						load: () => import("../../client/src/routes/todos/index.json.ts")
					},
		{
						type: 'page',
						pattern: /^\/todos\/?$/,
						params: empty,
						a: ["client/src/routes/__layout.svelte", "client/src/routes/todos/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'endpoint',
						pattern: /^\/todos\/([^/]+?)\.json$/,
						params: (m) => ({ uid: d(m[1])}),
						load: () => import("../../client/src/routes/todos/[uid].json.ts")
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	serverFetch: hooks.serverFetch || fetch
});

const module_lookup = {
	"client/src/routes/__layout.svelte": () => import("../../client/src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"client/src/routes/index.svelte": () => import("../../client/src/routes/index.svelte"),"client/src/routes/messages.svelte": () => import("../../client/src/routes/messages.svelte"),"client/src/routes/register.svelte": () => import("../../client/src/routes/register.svelte"),"client/src/routes/about.svelte": () => import("../../client/src/routes/about.svelte"),"client/src/routes/login.svelte": () => import("../../client/src/routes/login.svelte"),"client/src/routes/todos/index.svelte": () => import("../../client/src/routes/todos/index.svelte")
};

const metadata_lookup = {"client/src/routes/__layout.svelte":{"entry":"/./_app/pages/__layout.svelte-3487a680.js","css":["/./_app/assets/pages/__layout.svelte-f48abee7.css"],"js":["/./_app/pages/__layout.svelte-3487a680.js","/./_app/chunks/vendor-432035a5.js","/./_app/chunks/feathersClient-c6d1aa60.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"/./_app/error.svelte-89d89623.js","css":[],"js":["/./_app/error.svelte-89d89623.js","/./_app/chunks/vendor-432035a5.js"],"styles":[]},"client/src/routes/index.svelte":{"entry":"/./_app/pages/index.svelte-4fc42624.js","css":["/./_app/assets/pages/index.svelte-98304222.css"],"js":["/./_app/pages/index.svelte-4fc42624.js","/./_app/chunks/vendor-432035a5.js"],"styles":[]},"client/src/routes/messages.svelte":{"entry":"/./_app/pages/messages.svelte-5dfded98.js","css":[],"js":["/./_app/pages/messages.svelte-5dfded98.js","/./_app/chunks/vendor-432035a5.js","/./_app/chunks/feathersClient-c6d1aa60.js"],"styles":[]},"client/src/routes/register.svelte":{"entry":"/./_app/pages/register.svelte-6049996c.js","css":[],"js":["/./_app/pages/register.svelte-6049996c.js","/./_app/chunks/vendor-432035a5.js","/./_app/chunks/feathersClient-c6d1aa60.js"],"styles":[]},"client/src/routes/about.svelte":{"entry":"/./_app/pages/about.svelte-cc39adce.js","css":[],"js":["/./_app/pages/about.svelte-cc39adce.js","/./_app/chunks/vendor-432035a5.js"],"styles":[]},"client/src/routes/login.svelte":{"entry":"/./_app/pages/login.svelte-b83c4af9.js","css":[],"js":["/./_app/pages/login.svelte-b83c4af9.js","/./_app/chunks/vendor-432035a5.js","/./_app/chunks/singletons-12a22614.js","/./_app/chunks/feathersClient-c6d1aa60.js"],"styles":[]},"client/src/routes/todos/index.svelte":{"entry":"/./_app/pages/todos/index.svelte-5e1f667a.js","css":["/./_app/assets/pages/todos/index.svelte-05e41044.css"],"js":["/./_app/pages/todos/index.svelte-5e1f667a.js","/./_app/chunks/vendor-432035a5.js"],"styles":[]}};

async function load_component(file) {
	return {
		module: await module_lookup[file](),
		...metadata_lookup[file]
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}