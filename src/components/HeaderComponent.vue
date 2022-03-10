<template>
  <div class="container pt-1">
    <header class="d-flex justify-content-between align-items-center py-3 px-5 text-white bg-dark">
      <div class="logo">
        <h1>Giphy Searcher</h1>
      </div>


      <ul class="nav align-items-center">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/favorites">Favorites</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
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
    padding: 0 10px;
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
