import { mount } from '@vue/test-utils'
import LoginPage from '@/views/LoginPage.vue'

describe('LoginFPage.vue', () => {
  it('renders home vue', () => {
    const wrapper = mount(LoginPage)
    expect(wrapper.text()).toMatch('Ready to create an app?')
  })
})
