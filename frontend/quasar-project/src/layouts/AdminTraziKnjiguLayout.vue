<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Trazi knjigu (admin)
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'AdminTraziKnjiguLayout'
})

const linksList = [
    {
      title: 'Pocetna stranica',
      caption: 'Pocetna stranica',
      icon: 'home',
      link: '#/admin'
    },
    {
      title: 'Popis knjiga',
      caption: 'Popis svih knjiga u bazi',
      icon: 'book',
      link: '#/admin/popisKnjigaBaza'
    },
    {
      title: 'Pretrazivanje',
      caption: 'Trazilica',
      icon: 'search',
      link: '#/admin/pretrazivanje'
    },
    {
      title: 'Popis korisnika',
      caption: 'Lista korisnika u knjiznici',
      icon: 'admin_panel_settings',
      link: '#/admin/popis_korisnika'
    },
    {
      title: 'Unos knjiga',
      caption: 'Unos knjige u sustav',
      icon: 'import_contacts',
      link: '#/admin/unos_knjiga'
    },
    {
      title: 'Logout',
      caption: 'Odjava iz sustava',
      icon: 'logout',
      link: '#/logout'
    },
  ]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
