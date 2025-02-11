export default [
	{
		path: "/",
		component: () => import("@/views/Auth.vue"),
		meta: { publicRoute: true },
	},
	{
		path: "/",
		component: () => import("@/views/workdesk/WorkdeskLayout.vue"),
		children: [
			{ path: "workdesk", component: () => import("@/views/workdesk/Dashboard.vue") },
			{
				path: "weight-wave",
				component: () => import("@/views/weight-wave/Dashboard.vue"),
				children: [{ path: "add", component: () => import("@/views/weight-wave/AddWeight.vue") }],
			},
			// { path: "weight-wave/add", component: () => import("@/views/weight-wave/AddWeight.vue") },
		],
	},

	{
		path: "/:pathMatch(.*)*",
		component: () => import("@/views/PathNotFound.vue"),
	},
];
