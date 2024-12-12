<template>
  <q-page>
    <q-table
      :rows="rezervacije"
      :columns="columns"
      row-key="naslov"
      class="q-pa-md"
    >
    </q-table>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Definiraj stupce za tablicu
const columns = [
  { name: 'naslov', label: 'Naslov Knjige', align: 'left', field: 'naslov' },
  { name: 'autor', label: 'Autor', align: 'left', field: 'autor' },
  { name: 'korisnik', label: 'Korisnik', align: 'left', field: 'korisnik' },
  { name: 'datum_rez', label: 'Datum Rezervacije', align: 'center', field: 'datum_rez' }
]

// Reaktivni element za pohranu podataka
const rezervacije = ref([])

// Dohvati podatke sa servera
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/rezervirane_knjige')
    rezervacije.value = response.data
  } catch (error) {
    console.error('Greška pri dohvaćanju podataka: ', error)
  }
})
</script>

<style scoped>
/* Ovdje možete dodati stilove za vašu stranicu */
</style>
