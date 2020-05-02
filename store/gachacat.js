const initState = {
  myCats: [],
  currentGachaCat: {
    id: '0',
    imgUrl: '/cover.jpg',
    description: '',
    name: '',
    status: {
      'Adaptability': 0,
      'Affection Level': 0,
      'Social Needs': 0,
      'Stanger Friendly': 0,
      'Rarity': 0,
    }
  },
}

const initGetters = {
  getGachaedCat: state => state.currentGachaCat,
  listOfMyCats: state => state.myCats,
}

const mutations = {
  setCurrentGachaCat(state, catData) {
    state.currentGachaCat = catData
  },
  saveCat(state, catData) {
    state.myCats.push(catData)
  }
}

const actions = {
  async fetchRandomCat({commit}) {
    const response = await this.$axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1&size=small')
    const { data } = response
    const { breeds } = data[0]
    const catData = data[0]
    const catBreeds = breeds[0]

    const formedCatData = {
      id: catData.id,
      imgUrl: catData.url,
      description: catBreeds.description,
      name: catBreeds.name,
      status: {
        'Adaptability': catBreeds.adaptability,
        'Affection Level': catBreeds.affection_level,
        'Social Needs': catBreeds.social_needs,
        'Stanger Friendly': catBreeds.stranger_friendly,
        'Rarity': catBreeds.rare,
      }
    }

    commit('setCurrentGachaCat', formedCatData)
    return response
  },
  saveMyCats({commit}, catData) {
    commit('saveCat', catData)
  }
}

export default {
  namespaced: true,
  state: () => initState,
  getters: initGetters,
  actions,
  mutations
}
