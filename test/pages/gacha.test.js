import { m } from '~/utils/unit-test-utils'
import gacha from '@/pages/gacha'

describe('gacha page test', () => {
  const wrapper = m(gacha)

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('should reset gacha state first then do action on gachaAction', () => {
    wrapper.vm.isSaved = true
    wrapper.vm.gachaAction()

    expect(wrapper.vm.isSaved).toBeFalsy()
    
  })
})
