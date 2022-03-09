<template>
    <div class="random-block bg-dark text-white mt-5">
      <h4>Random GIF</h4>

      <div v-if="this.$store.state.random === null" class="waiting text-center my-2">
        <img src="../assets/waiting.gif" alt="" width="150" height="150">
      </div>

      <div v-else class="random">
        <div class="random-card d-flex flex-column align-items-center">
          <img :src="showRandomGif.images.fixed_height.url"
               :alt="showRandomGif.title"
               width="200"
               height="200"
          >
          <button @click="changeRandomGif" class="btn btn-secondary mt-2">Randomize</button>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  name: "RandomList",
  computed: {
    showRandomGif() {
      return this.$store.state.random
    }
  },
  methods: {
    async changeRandomGif() {
      this.$store.dispatch('getRandom')
    }
  }
}
</script>

<style scoped>
.random-block {
  border: 1px solid #2c3e50;
  border-radius: 10px;
  padding: 20px;
}
.random-block h4 {
  color: chartreuse;
}
.random-card {
  height: auto;
  display: inline-block;
  background-color: transparent;
}
.random-card img {
  border-radius: 7px;
}
</style>
