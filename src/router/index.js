import { createRouter, createWebHashHistory } from 'vue-router';
import AddInfo from '../views/AddInfo1.vue';
const routes = [
  {
    path: '/newapp/add-info',
    name: 'AddInfo',
    component: AddInfo,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
