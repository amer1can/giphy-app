<template>
  <div class="container d-flex">
    <div class="left-side">

      <div class="search-wrap">
        <h3>Search GIFs</h3>
        <div class="search d-flex mt-3">
          <input class="form-control"
                 type="text"
                 placeholder="Searching GIF"
                 v-model="this.$store.state.searchItem"
                 @keypress.enter="searchItem"
          >
          <button class="btn btn-secondary mx-1" @click="searchItem">Search</button>
          <button class="btn btn-secondary mx-1" @click="searchClear">Clear</button>
        </div>

        <div v-if="this.$store.state.searchList.length !== 0" class="search-list">
          <SearchList />
        </div>
      </div>

      <TrendList />
    </div>
    <div class="right-side">
      <RandomList />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TrendList from "@/components/TrendList";
import RandomList from "@/components/RandomList";
import SearchList from "@/components/SearchList";

export default {
  name: 'Home',
  components: {RandomList, TrendList, SearchList},
  methods: {
    async searchItem() {
      this.$store.commit('nullingSearchList')
      await this.$store.dispatch('searchItem')
    },
    searchClear() {
      this.$store.commit('nullingSearchList')
      this.$store.state.searchItem = ''
    },
  }
}
</script>

<style>
.left-side {
  max-width: 100%;
}
.right-side {
  max-width: 400px;
}
.search-wrap {
  padding: 10px 15px 0px;
}
.search-wrap h3 {
  color: #f5b9b9;
}

input, button, input:active, button:active, btn {
  outline: none!important;
}
</style>
