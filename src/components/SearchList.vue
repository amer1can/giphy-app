<template>
  <div class="container">
      <div class="search bg-dark text-white mt-5">

        <div v-if="!this.$store.state.searchList" class="waiting text-center my-2">
          <img src="../assets/waiting.gif" alt="" width="150" height="150">
        </div>

        <div v-else class="trend-list text-center">
          <div class="cards d-flex flex-wrap">
            <div class="card" v-for="card in this.$store.state.searchList" :key="card.id">
              <svg  class="heart" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="18" height="18" viewBox="0 0 176.104 176.104" style="enable-background:new 0 0 176.104 176.104;"
                    xml:space="preserve"
                    @click="addToFavoritesFromSearch(card.id)"
              >
              <g>
                <g>
                  <path d="M150.383,18.301c-7.13-3.928-15.308-6.187-24.033-6.187c-15.394,0-29.18,7.015-38.283,18.015
                    c-9.146-11-22.919-18.015-38.334-18.015c-8.704,0-16.867,2.259-24.013,6.187C10.388,26.792,0,43.117,0,61.878
                    C0,67.249,0.874,72.4,2.457,77.219c8.537,38.374,85.61,86.771,85.61,86.771s77.022-48.396,85.571-86.771
                    c1.583-4.819,2.466-9.977,2.466-15.341C176.104,43.124,165.716,26.804,150.383,18.301z"
                        fill="white" stroke-width="3" stroke="red" />
                </g>
              </g>
            </svg>
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
    },
    addToFavoritesFromSearch(cardId) {
      this.$store.commit('addToFavoriteListFromSearch', cardId)
    }
  }
}
</script>

<style scoped>
.search h3 {
  color: #015adc;
}

.more-card {
  margin: 5px;
  width: 200px;
  height: 200px;
  border: 1px solid burlywood;
  border-radius: 7px;
}
</style>
