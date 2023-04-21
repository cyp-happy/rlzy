import { createRouter, createWebHashHistory } from 'vue-router';
import AddInfo from '../components/AddInfo1.vue';
const routes = [
  {
    path: '/newapp/addinfo',
    name: 'AddInfo',
    component: AddInfo,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
