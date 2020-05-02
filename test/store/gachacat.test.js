import axios from 'axios'
import gachacat from '~/store/gachacat'

const {state, getters, mutations, actions} = gachacat;
const mockState = state();
const commit = (commitName, mockCommitData) => mutations[commitName](mockState, mockCommitData);

const initStateValue = {
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

actions.$axios = axios

describe('gachacat storeModule', () => {
  it('should have default state value', () => {
    expect(mockState).toEqual(initStateValue)
  })

  it('should mutate currentGachaCat state on setCurrentGachaCat', () => {
    initStateValue.currentGachaCat.description = 'mutated'

    commit('setCurrentGachaCat', initStateValue.currentGachaCat)

    expect(getters.getGachaedCat(mockState).description).toBe('mutated')
  })

  it('should mutate myCat state on action fetchRandomCat', async () => {
    await actions.fetchRandomCat({commit})

    expect(getters.getGachaedCat(mockState)).not.toEqual(initStateValue.currentGachaCat)
  })

  it('should able to saveMyCats by adding cat data to array of myCats', () => {
    const prevListCatsLength = getters.listOfMyCats(mockState).length
    actions.saveMyCats({commit}, initStateValue.currentGachaCat)

    expect(getters.listOfMyCats(mockState).length).toBeGreaterThan(prevListCatsLength)
  })
})