<template>
  <div class="container">
      <div class="search bg-dark text-white mt-5">
        <h3>Found GIFs</h3>

        <div v-if="!this.$store.state.searchList" class="waiting text-center my-2">
          <img src="../assets/waiting.gif" alt="" width="150" height="150">
        </div>

        <div v-else class="trend-list text-center">
          <div class="cards d-flex flex-wrap">
            <div class="card" v-for="card in this.$store.state.searchList" :key="card.id">
              <img :src="card.images.fixed_height.url" :alt="card.title">
            </div>
            <div class="more-card d-flex justify-content-center align-items-center">
              <button class="btn btn-secondary mt-3"
                      @click="findMore"
              >
                Find more
              </button>
            </div>

          </div>

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "SearchList",
  methods: {
    async findMore() {
      this.$store.dispatch('searchItem')
    }
  }
}
</script>

<style scoped>
.search h3 {
  color: #015adc;
}
.card {
  background-color: transparent;
  margin: 5px;
}
.card img {
  border-radius: 7px;
}
.more-card {
  margin: 5px;
  width: 200px;
  height: 200px;
  border: 1px solid burlywood;
  border-radius: 7px;
}
</style>
