<template>
  <q-page padding>
    <!-- content -->
    <div class="q-pa-md" style="max-width: 400px">

<q-form
  class="q-gutter-md"
>
  <q-input
    filled
    v-model="naslov"
    label="Naslov knjige"
    hint="Naslov knjige"
  />

  <q-input
    filled
    v-model="autor"
    label="Autor"
    hint="Ime autora"
  />
  <q-input
    filled
    v-model="opis"
    label="Opis"
    hint="Opis knjige"
  />
  <q-input
    filled
    v-model="slika"
    label="URL Slike"
    hint="Slika knjige"
  />
  <q-input
    filled
    v-model="stanje"
    label="Broj primjeraka"
    hint="Broj primjeraka knjiga"
  />

  

  <div>
    <q-btn label="Submit" type="submit" color="primary" @click="insertBook()"/>
    <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
  </div>
</q-form>

</div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import axios from 'axios'

export default {
  setup () {
    const $q = useQuasar()
    const naslov = ref(null)
    const autor = ref(null)
    const opis = ref(null)
    const slika = ref(null)
    const stanje = ref(null)


    return {
      naslov,
      autor,
      opis,
      slika,
      stanje
    }
  },
  methods: {
    async insertBook() {
      const formData = {
        "naslov": this.naslov,
        "autor": this.naslov,
        "opis": this.opis,
        "slika": this.slika,
        "stanje": this.stanje
      }
      await axios.post('http://localhost:3000/api/unos_knjige', formData)
        .then(result => {
          console.log(result.data)
          //console.log(this.books[0].id)
        })
        .catch(error => {
          console.error(error)
        })
    },
  }
}


</script>
