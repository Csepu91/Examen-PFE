import { createRouter, createWebHistory } from 'vue-router'
import Ccalificaciones from "@/views/Ccalificaciones.vue"
import Fregistro from "@/views/Fregistro.vue";

const routes = [
    {
      path: "/",
      name: "Ccalificaciones",
      component: Ccalificaciones
    },
    {
      path: "/Fregistro",
      name: "Fregistro",
      component: Fregistro,
    }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
