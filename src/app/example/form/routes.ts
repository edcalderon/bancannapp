import { RouteConfig } from 'vue-router/types/router';

export const FormRoutes: RouteConfig[] = [
  {
    path: '/aboutBCA',
    name: 'aboutBCA',
    component: () => import(/* webpackChunkName: "form" */ './Form/Form.vue').then((m: any) => m.default),
  },
  {
    path: '/aboutEgroweed',
    name: 'aboutEgroweed',
    component: () =>
      import(/* webpackChunkName: "form" */ './PageEgroweed/PageEgroweed.vue').then((m: any) => m.default),
  },
];
