export const state = () => ({
  images: [],
  items: []
})

export const mutations = {
  ADD_IMAGE(state, imgSrc) {
    state.images.unshift(imgSrc)
  },

  ADD_ITEMS(state, items) {
    state.items = [...state.items, ...items]
  }
}

export const actions = {
  async fetchRandomDog ({ commit }) {
    const resJson = await this.$axios.$get('https://dog.ceo/api/breeds/image/random')
    if (resJson.status === 'success') {
      commit('ADD_IMAGE', resJson.message)
    }
  },
  async fetchRandomCat ({ commit }) {
    const resJson = await this.$axios.$get('https://api.thecatapi.com/v1/images/search?format=json')
    commit('ADD_IMAGE', resJson[0].url)
  },
  async fetchPaginationItems ({ commit }, { page }) {
    const { data } = await this.$axios.$get(`/api/mock/items/${page}`)
    commit('ADD_ITEMS', data)
  }
}
