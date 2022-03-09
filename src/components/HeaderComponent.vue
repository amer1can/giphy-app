<template>
  <div class="container pt-1">
    <header class="d-flex justify-content-between align-items-center py-3 px-5 text-white bg-dark">
      <div class="logo">
        <h1>Giphy Searcher</h1>
      </div>
      <div class="search d-flex">
        <input class="form-control"
               type="text"
               placeholder="Searching GIF"
               v-model="this.$store.state.searchItem"
        >
        <button class="btn btn-secondary mx-1" @click="searchItem">Search</button>
        <button class="btn btn-secondary mx-1" @click="searchClear">Clear</button>
      </div>

      <ul class="nav align-items-center">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </header>

  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods: {
    async searchItem() {
      this.$store.commit('nullingSearchList')
      await this.$store.dispatch('searchItem')
    },
    searchClear() {
      this.$store.commit('nullingSearchList')
      this.$store.state.searchItem = ''
    }
  }
}
</script>

<style lang="scss">
header {
  border: 1px solid antiquewhite;
  border-radius: 15px;
}
.logo h1 {
  color: fuchsia;
}
.nav {
  li {
    padding: 0 30px;
  }

  a {
    font-weight: bold;
    color: #f5b9b9;
    text-decoration: none;

    &.router-link-exact-active {
       color: #ef0606;
     }
  }
}
</style>
