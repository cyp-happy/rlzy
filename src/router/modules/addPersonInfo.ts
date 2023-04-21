export default {
    path: "/",
    meta: {
        title: "添加人员信息",
    },
    children: [
        {
            path: "/",
            name: "addinfo",
            component: () => import("@/views/AddPersonInfo/index.vue"),
            meta: {
                title: "addinfo"
            }
        }
    ]
} as RouteConfigsTable;
