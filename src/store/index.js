import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    bookList: [],
    foundBook: null,
  },
  mutations: {
    increaseCountState(state) {
      state.count += 1;
    },
    decreaseCountState(state) {
      state.count -= 1;
    },
  },
  actions: {
    getAllBooks(context) {
      const url = "/api/v1/books/all";
      axios
        .get(url)
        .then((response) => (context.state.bookList = response.data.payload))
        .catch(() => (context.state.bookList = []));
    },
    getBookById(context, payload) {
      const url = "/api/v1/books/individual/" + payload.id;
      axios
        .get(url)
        .then((response) => (context.state.foundBook = response.data.payload))
        .catch((err) => {
          context.state.foundBook = null;
          console.log(err);
        });
    },
  },
  modules: {},
});
