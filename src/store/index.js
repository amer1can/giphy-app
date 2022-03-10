import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
  state: {
    trendList: [],
    limit: 10,
    random: null,
    searchList: [],
    searchItem: '',
    searchLimit: 10,
    isLoading: false,
    favoriteList: [],
    cartList: []
  },
  mutations: {
    nullingSearchList() {
      this.state.searchList = []
    },
    addToFavoriteList({state}, id) {
      console.log(state)
      const elem = this.state.trendList.find(item => item.id === id)
      this.state.favoriteList.push(elem)
    },
    removeFromFavoriteList({state}, id) {
      console.log(state)
      const findInd = this.state.favoriteList.findIndex(item => item.id === id)
      this.state.favoriteList.splice(findInd, 1)
    },
    addToFavoriteListFromSearch({state}, id) {
      console.log(state)
      const elem = this.state.searchList.find(item => item.id === id)
      this.state.favoriteList.push(elem)
    },
    addToFavoriteListRandom() {
      this.state.favoriteList.push(this.state.random)
    }
  },
  actions: {
    async getTrending({state}) {
      if (state.trendList) {
        state.limit = this.state.trendList.length + 10
      }
      state.isLoading = true
      const res = await axios.get(
          `https://api.giphy.com/v1/gifs/trending?api_key=R5VG4c7mScQl0dSzmzc4hXHJNKi99zgY&limit=${state.limit}&rating=g`
      )
      state.trendList = res.data.data
      state.isLoading = false
      console.log(state.trendList)
    },
    async getRandom({state}) {
      state.random = null
      const res = await axios.get(
          'https://api.giphy.com/v1/gifs/random?api_key=R5VG4c7mScQl0dSzmzc4hXHJNKi99zgY&tag=&rating=g'
      )
      state.random = res.data.data
      console.log(state.random)
    },
    async searchItem({state}) {
      if (state.searchList) {
        state.searchLimit = state.searchList.length + 10
      }

      if (state.searchItem !== '') {
        const res = await axios.get(
            `https://api.giphy.com/v1/gifs/search?api_key=R5VG4c7mScQl0dSzmzc4hXHJNKi99zgY&q=${state.searchItem}&limit=${state.searchLimit}&offset=0&rating=g&lang=en`
        )
        state.searchList = res.data.data
        console.log(state.searchList)
      }
    },
  },
  modules: {
  }
})
