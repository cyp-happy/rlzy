import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'
import ElementPlus from "element-plus";
import { getServerConfig } from "./config";
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import './styles/tailwind.css'
import "element-plus/dist/index.css";

const app = createApp(App)

getServerConfig(app).then(async config => {
    app.use(router);
    await router.isReady();
    app.use(ElementPlus, {
        locale: zhCn,
    });
    app.mount("#app");
});

