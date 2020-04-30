const initState = {
  myCat: [],
  currentGachaCat: '/cover.jpg',
}

const initGetters = {
  getRandomedCat: state => state.currentGachaCat
}

const mutations = {
  setCurrentGachaCat(state, imgData) {
    state.currentGachaCat = imgData
  },
  saveCat(state, imgData) {
    const catBreedsData = imgData.breeds[0]
    const catData = {
      id: imgData.id,
      imgUrl: imgData.url,
      description: catBreedsData.description,
      name: catBreedsData.name,
      status: {
        'Adaptability': catBreedsData.adaptability,
        'Affection Level': catBreedsData.affection_level,
        'Social Needs': catBreedsData.social_needs,
        'Stanger Friendly': catBreedsData.stranger_friendly,
        'Rarity': catBreedsData.rare,
      }
    }

    state.myCat.push(catData)
  }
}

const actions = {
  async fetchRandomCat({commit}) {
    const response = await this.$axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&size=small')
    const { data } = response
    commit('setCurrentGachaCat', data[0])
    return response
  }
}

export default {
  namespaced: true,
  state: () => initState,
  getters: initGetters,
  actions,
  mutations
}
