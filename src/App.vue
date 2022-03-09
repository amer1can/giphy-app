<template>
  <HeaderComponent />
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgb(33,37,41);
  padding-bottom: 50px;
}
input, button {
  outline: none;
}
</style>

<script>
import HeaderComponent from "@/components/HeaderComponent";

export default {
  components: {HeaderComponent},
  data() {
    return {

    }
  },
  async mounted() {
    await this.$store.dispatch('getTrending')
    await this.$store.dispatch('getRandom')
  },
  methods: {

  }
}
</script>
