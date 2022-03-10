<template>
  <div class="container">
    <div class="favorite bg-dark text-white mt-5">
      <h3>Favorite GIFs</h3>

      <div v-if="favorites.length === 0" class="waiting text-center my-2">
        <h3>No favorites</h3>
      </div>

      <div v-else class="favorite-list text-center">
        <div class="cards d-flex flex-wrap">
          <div class="card" v-for="card in favorites" :key="card.id">
            <img :src="card.images.fixed_height.url" :alt="card.title">
            <button
                class="close btn-close btn-close-white"
                @click="removeFromFavorites(card.id)"
            ></button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Favorites",
  computed: {
    favorites() {
      return this.$store.state.favoriteList
    },
  },
  methods: {
    removeFromFavorites(id) {
      this.$store.commit('removeFromFavoriteList', id)
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  background-color: transparent;
  margin: 5px;
}
.card img {
  border-radius: 7px;
}
.card:hover .close {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.close {
  opacity: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: opacity 0.3s ease-in-out;
}
</style>
