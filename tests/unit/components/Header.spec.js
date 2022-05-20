import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header';

describe('Header.vue', () => {
  it('is vue instance', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.vm).toBeTruthy();
  });

  it('initialize elements correctly', () => {
    const wrapper = shallowMount(Header);

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.findAll('header').length).toBe(1);
    expect(wrapper.findAll('img').length).toBe(1);
  });
});
