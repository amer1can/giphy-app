<template>
  <div class="container">
    <div class="favorite bg-dark text-white mt-5">
      <h3>Cart</h3>

<!--      <div v-if="favorites.length === 0" class="waiting text-center my-2">-->
<!--        <h3>No favorites</h3>-->
<!--      </div>-->

<!--      <div v-else class="favorite-list text-center">-->
<!--        <div class="cards d-flex flex-wrap">-->
<!--          <div class="card" v-for="card in favorites" :key="card.id">-->
<!--            <img :src="card.images.fixed_height.url" :alt="card.title">-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

    </div>
  </div>
</template>

<script>
export default {
  name: "Favorites",
  computed: {

  }
}
</script>

<style scoped>

</style>
