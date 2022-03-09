<template>
  <div class="container d-flex">
    <div class="left-side">
      <div v-if="this.$store.state.searchList.length !== 0" class="search-list">
        <SearchList />
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
  components: {SearchList, RandomList, TrendList},
}
</script>

<style>
.left-side {
  max-width: 100%;
}
.right-side {
  max-width: 400px;
}
</style>
