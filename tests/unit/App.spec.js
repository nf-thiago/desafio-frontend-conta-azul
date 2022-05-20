import { shallowMount } from '@vue/test-utils';
import App from '@/App';

describe('App.vue', () => {
  it('is vue instance', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view'],
    });

    expect(wrapper.vm).toBeTruthy();
  });

  it('initialize elements correctly', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-view'],
    });

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.findAll('header-stub').length).toBe(1);
  });
});
