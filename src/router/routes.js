export default [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/pages/PageHome.vue')
  },
  {
    path: '/:id',
    name: 'Details',
    component: () => import('@/components/pages/PageDetails.vue'),
    props: (route) => ({ id: Number.parseInt(route.params.id) })
  },
  {
    path: '*',
    name: 'NotFound',
    redirect: {
      name: '/'
    }
  }
];
