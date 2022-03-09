<template>
  <div class="container">
    <div class="trend bg-dark text-white mt-5">
      <h3>Trending GIFs</h3>

      <div v-if="!this.$store.state.trendList" class="waiting text-center my-2">
        <img src="../assets/waiting.gif" alt="" width="150" height="150">
      </div>

      <div v-else class="trend-list text-center">
        <div class="cards d-flex flex-wrap">
          <div class="card" v-for="card in this.$store.state.trendList" :key="card.id">
            <img :src="card.images.fixed_height.url" :alt="card.title">
          </div>

          <div class="more-card d-flex justify-content-center align-items-center">
            <button class="btn btn-secondary mt-3"
                    @click="loadMore"
                    :disabled="isLoadingNow ? true : false"
            >
              More GIFs
            </button>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "TrendList",
  computed: {
    isLoadingNow() {
      return this.$store.state.isLoading
    }
  },
  methods: {
    async loadMore() {
      this.$store.dispatch('getTrending')
    }
  }
}
</script>

<style scoped>
.trend h3 {
  color: chartreuse;
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
