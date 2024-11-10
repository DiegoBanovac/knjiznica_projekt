const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/popisKnjiga',  
    component: () => import('layouts/PopisKnjigaLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/PopisKnjigaPage.vue') }  
    ]
  },
  {
    path: '/pretrazivanje',  
    component: () => import('layouts/TraziKnjiguLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/TraziKnjiguPage.vue') }  
    ]
  },
  {
    path: '/o_nama',  
    component: () => import('layouts/ONamaLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/ONamaPage.vue') } 
    ]
  },
  {
    path: '/lokacija',  
    component: () => import('layouts/LokacijaLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/LokacijaPage.vue') }  
    ]
  },
  {
    path: '/login',  
    component: () => import('layouts/LoginLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/LoginPage.vue') }  
    ]
  },
  {
    path: '/registracija',  
    component: () => import('layouts/RegistracijaLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/RegistracijaPage.vue') }  
    ]
  },
  
];


export default routes
