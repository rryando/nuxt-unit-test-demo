import Vuex from 'vuex'
import gachacat from './gachacat'

const createStore = () => new Vuex.Store({
  modules: {
    gachacat
  }
})

export default createStore
