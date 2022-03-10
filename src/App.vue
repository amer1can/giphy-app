<template>
  <HeaderComponent />
  <router-view/>
  <FooterComponent />
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
input, button, input:active, button:active {
  outline: none!important;
}
.card {
  position: relative;
  background-color: transparent;
  margin: 5px;
}
.card:hover .heart {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}
.card img {
  border-radius: 7px;
}
.heart {
  opacity: 0;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}
</style>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";

export default {
  components: {FooterComponent, HeaderComponent},
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
