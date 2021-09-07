const c = [
	() => import("../../../client/src/routes/__layout.svelte"),
	() => import("../components/error.svelte"),
	() => import("../../../client/src/routes/index.svelte"),
	() => import("../../../client/src/routes/messages.svelte"),
	() => import("../../../client/src/routes/register.svelte"),
	() => import("../../../client/src/routes/about.svelte"),
	() => import("../../../client/src/routes/login.svelte"),
	() => import("../../../client/src/routes/todos/index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// client/src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// client/src/routes/messages.svelte
	[/^\/messages\/?$/, [c[0], c[3]], [c[1]]],

	// client/src/routes/register.svelte
	[/^\/register\/?$/, [c[0], c[4]], [c[1]]],

	// client/src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[5]], [c[1]]],

	// client/src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[6]], [c[1]]],

	// client/src/routes/todos/index.json.ts
	[/^\/todos\.json$/],

	// client/src/routes/todos/index.svelte
	[/^\/todos\/?$/, [c[0], c[7]], [c[1]]],

	// client/src/routes/todos/[uid].json.ts
	[/^\/todos\/([^/]+?)\.json$/]
];

export const fallback = [c[0](), c[1]()];