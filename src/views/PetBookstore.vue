<template>
  <h1>This is Pet Bookstore</h1>
  <h2>{{ count }}</h2>
  <button @click="increaseCount">Increase</button>
  <button @click="decreaseCount">Decrease</button>
</template>
<script>
export default {
  name: "PetBookstore",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increaseCount() {
      this.count += 1;
    },
    decreaseCount() {
      this.count -= 1;
    },
  },
};
</script>