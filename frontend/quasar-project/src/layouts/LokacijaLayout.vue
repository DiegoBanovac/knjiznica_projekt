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
          Lokacija
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
  name: 'LokacijaLayout'
})

const linksList = [
  {
    title: 'Pocetna stranica',
    caption: 'Pocetna stranica',
    icon: 'home',
    link: '#/'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih kjniga',
    icon: 'book',
    link: '#/popisKnjiga'
  },
  {
    title: 'Popis knjiga baza',
    caption: 'Popis svih knjiga',
    icon: 'book',
    link: '#/popisKnjigaBaza'
  },
  {
    title: 'Pretrazivanje',
    caption: 'Trazilica',
    icon: 'search',
    link: '#/pretrazivanje'
  },
  {
    title: 'O nama',
    caption: 'Kratak opis o knjiznici',
    icon: 'record_voice_over',
    link: '#/o_nama'
  },
  {
    title: 'Lokacija',
    caption: 'Lokacija knjiznice',
    icon: 'map',
    link: '#/lokacija'
  },
  {
    title: 'Login',
    caption: 'Prijava u sustav',
    icon: 'public',
    link: '#/login'
  },
  {
    title: 'Registracija',
    caption: 'Registracija u sustav',
    icon: 'favorite',
    link: '#/registracija'
  },
  {
    title: 'Rezervacije',
    caption: 'Popis rezerviranih knjiga',
    icon: 'favorite',
    link: '#/rezervacije'
  }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
