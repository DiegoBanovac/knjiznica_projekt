<template>
  <q-page padding>
    <!-- Search Section -->
    <div class="q-pa-md">
      <q-input
        v-model="searchQuery"
        label="Unesite naziv knjige ili autora"
        debounce="300"
        filled
        :placeholder="'Pretraži...'"
        class="q-mb-md"
      />

      <div class="q-mb-md">
        <q-checkbox
          v-model="searchByAuthor"
          label="Pretražuj po autoru"
          class="q-mb-md"
        />
      </div>

      <q-btn
        label="Traži"
        color="primary"
        @click="searchBooks"
        class="q-mb-md"
      />
    </div>

    <!-- Results Table -->
    <q-card v-if="filteredBooks.length > 0">
      <q-card-section>
        <q-table
          :rows="filteredBooks"
          :columns="columns"
          row-key="id"
        />
      </q-card-section>
    </q-card>

    <!-- No results message -->
    <q-card v-if="filteredBooks.length === 0">
      <q-card-section>
        <div class="text-center">
          <q-icon name="mdi-alert-circle" size="3em" color="red" />
          <p class="text-h6">Nema rezultata pretrage</p>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      searchByAuthor: false, // Checkbox for searching by author
      books: [
        { id: 1, title: 'Ponos i predrasude', author: 'Jane Austen', year: 1813, genre: 'Romantika' },
        { id: 2, title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopia' },
        { id: 3, title: 'Moby Dick', author: 'Herman Melville', year: 1851, genre: 'Avantura' },
        { id: 4, title: 'Gospodar prstenova', author: 'J.R.R. Tolkien', year: 1954, genre: 'Fantastika' },
        { id: 5, title: 'Zločin i kazna', author: 'Fyodor Dostoevsky', year: 1866, genre: 'Klasik' },
        { id: 6, title: 'Ubiti pticu rugalicu', author: 'Harper Lee', year: 1960, genre: 'Drama' },
      ],
      filteredBooks: [],
      columns: [
        { name: 'title', label: 'Naslov', required: true, align: 'left', field: 'title' },
        { name: 'author', label: 'Autor', required: true, align: 'left', field: 'author' },
        { name: 'year', label: 'Godina', required: true, align: 'center', field: 'year' },
        { name: 'genre', label: 'Žanr', align: 'left', field: 'genre' },
      ],
    };
  },
  methods: {
    searchBooks() {
      // Reset filteredBooks before applying new search
      this.filteredBooks = this.books.filter(book => {
        const query = this.searchQuery.toLowerCase();
        if (this.searchByAuthor) {
          return book.author.toLowerCase().includes(query); // Search by author
        } else {
          return book.title.toLowerCase().includes(query); // Search by title
        }
      });
    },
  },
};
</script>

<style scoped>
/* You can add custom styles here if necessary */
</style>

