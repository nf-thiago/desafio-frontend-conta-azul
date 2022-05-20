import { shallowMount } from '@vue/test-utils';
import CitiesList from '@/components/CitiesList';
import City from '@/models/City';

describe('CitiesList.vue', () => {
  it('is vue instance', () => {
    const wrapper = shallowMount(CitiesList);
    expect(wrapper.vm).toBeTruthy();
  });

  it('initialize data correctly', () => {
    const wrapper = shallowMount(CitiesList);

    let citiesList = [
      new City({
        idOpenWeather: 3421319,
        name: 'Nuuk',
        country: 'GL'
      }),
      new City({
        idOpenWeather: 3445709,
        name: 'Urubici',
        country: 'BR'
      }),
      new City({
        idOpenWeather: 184742,
        name: 'Nairobi',
        country: 'KE'
      }),
    ];

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.vm.cities).toEqual(citiesList);
  });

  it('initialize elements correctly', () => {
    const wrapper = shallowMount(CitiesList);

    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.findAll('section').length).toBe(1);
    expect(wrapper.findAll('weather-card-stub').length).toBe(3);
  });
});
