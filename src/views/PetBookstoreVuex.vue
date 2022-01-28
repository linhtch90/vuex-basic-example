<template>
  <h1>PetBookstore Vuex</h1>
  <h2>{{ count }}</h2>
  <button @click="increaseCount">Increase</button>
  <button @click="decreaseCount">Decrease</button>
  <br />
  <ul v-if="bookList.length > 0">
    <li v-for="book in bookList" :key="book.id">
      {{ book.id }} - {{ book.title }} - {{ book.publishYear }}
    </li>
  </ul>
  <br />
  <div v-if="foundBook !== null">
    <div>Found Book with Id: {{ foundBook.id }}</div>
    <div>{{ foundBook.title }} - Published in {{ foundBook.publishYear }}</div>
  </div>
</template>
<script>
export default {
  name: "PetBookstoreVuex",
  computed: {
    count() {
      return this.$store.state.count;
    },
    bookList() {
      return this.$store.state.bookList;
    },
    foundBook() {
      return this.$store.state.foundBook;
    },
  },
  methods: {
    increaseCount() {
      this.$store.commit("increaseCountState");
    },
    decreaseCount() {
      this.$store.commit("decreaseCountState");
    },
  },
  mounted() {
    this.$store.dispatch("getAllBooks");
    this.$store.dispatch("getBookById", { id: "3" });
  },
};
</script>
