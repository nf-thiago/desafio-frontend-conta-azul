import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home';

describe('Home.vue', () => {
  it('is vue instance', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.vm).toBeTruthy();
  });

  it('initialize elements correctly', () => {
    const wrapper = shallowMount(Home);

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.findAll('cities-list-stub').length).toBe(1);
  });
});
