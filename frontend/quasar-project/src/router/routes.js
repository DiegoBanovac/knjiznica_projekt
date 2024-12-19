const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/popisKnjigaBaza',  
    component: () => import('layouts/MainLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/PopisKnjigaBaza.vue') }  
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
  {
    path: '/rezervacije',  
    component: () => import('layouts/MainLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/RezervacijePage.vue') }  
    ]
  },
  //ADMIN
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ]
  },
  {
    path: '/admin/popisKnjigaBaza',  
    component: () => import('layouts/AdminLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/PopisKnjigaBaza.vue') }  
    ]
  },
  {
    path: '/admin/pretrazivanje',  
    component: () => import('layouts/AdminTraziKnjiguLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/TraziKnjiguPage.vue') }  
    ]
  },
  {
    path: '/admin/popis_korisnika',  
    component: () => import('layouts/AdminLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/PopisKorisnikaPage.vue') } 
    ]
  },
  {
    path: '/admin/unos_knjiga',  
    component: () => import('layouts/AdminLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/UnosKnjigaPage.vue') }  
    ]
  },
  {
    path: '/logout',  
    component: () => import('layouts/AdminLayout.vue'),  
    children: [
      { path: '', component: () => import('pages/LogoutPage.vue') }  
    ]
  },

];


export default routes
