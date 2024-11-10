<template>
  <q-page padding>
    <!-- Content Wrapper -->
    <q-card>
      <q-card-section>
        <h2 class="text-center">Lista knjiga</h2>
      </q-card-section>

      <!-- Table displaying books data -->
      <q-table
        :rows="books"       
        :columns="columns" 
        row-key="id"        
        v-model:pagination="pagination"
      />
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Table column definitions (maps to database columns)
      columns: [
        {
          name: 'title',
          label: 'Naslov',
          required: true,
          align: 'left',
          field: 'title',
          format: val => `${val}`,
        },
        {
          name: 'author',
          label: 'Autor',
          required: true,
          align: 'left',
          field: 'author',
          format: val => `${val}`,
        },
        {
          name: 'year',
          label: 'Godina',
          required: true,
          align: 'center',
          field: 'year',
          format: val => `${val}`,
        },
        {
          name: 'genre',
          label: 'Žanr',
          align: 'left',
          field: 'genre',
          format: val => `${val}`,
        },
      ],

      // Dummy data representing books from a database
      books: [
        { id: 1, title: 'Ponos i predrasude', author: 'Jane Austen', year: 1813, genre: 'Romantika' },
        { id: 2, title: '1984', author: 'George Orwell', year: 1949, genre: 'Dystopia' },
        { id: 3, title: 'Moby Dick', author: 'Herman Melville', year: 1851, genre: 'Avantura' },
        { id: 4, title: 'Gospodar prstenova', author: 'J.R.R. Tolkien', year: 1954, genre: 'Fantastika' },
        { id: 5, title: 'Zločin i kazna', author: 'Fyodor Dostoevsky', year: 1866, genre: 'Klasik' },
        { id: 6, title: 'Ubiti pticu rugalicu', author: 'Harper Lee', year: 1960, genre: 'Drama' },
      ],

      // Pagination state
      pagination: {
        page: 1,
        rowsPerPage: 5,
      }
    };
  }
};
</script>

<style scoped>
/* Optional: Style the table or the card if needed */
</style>
