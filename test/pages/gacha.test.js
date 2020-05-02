import { m } from '~/utils/unit-test-utils'
import gacha from '@/pages/gacha'

jest.useFakeTimers();

describe('gacha page test', () => {
  const wrapper = m(gacha)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should reset gacha state first then do action on gachaAction', async () => {
    const defaultCardImg = wrapper.vm.defaultCardImg
    wrapper.vm.isSaved = true
    
    await wrapper.vm.gachaAction()
    jest.runOnlyPendingTimers();

    expect(wrapper.vm.isSaved).toBeFalsy()
    expect(wrapper.vm.cardImg).not.toBe(defaultCardImg)
    expect(wrapper.vm.isFlipAnimationDone).toBeTruthy()
    expect(wrapper.vm.isGachaIng).toBeFalsy()
  })

  it('should saveCat on method saveCat called', () => {
    wrapper.vm.isSaved = false
    
    wrapper.vm.saveCat()

    expect(wrapper.vm.isSaved).toBeTruthy()
  })

  it('should saveCat on method saveCat called', () => {
    wrapper.vm.isSaved = true
    
    wrapper.vm.saveCat()

    expect(wrapper.vm.isSaved).toBeTruthy()
  })
})
