import City from '@/models/City';

describe('City', () => {
  it('is an empty instance in the constructor', () => {
    let city = new City();

    expect(city.idOpenWeather).toBeUndefined();
    expect(city.name).toBeUndefined();
    expect(city.country).toBeUndefined();
  });

  it('is a populated instance in the constructor', () => {
    let city = new City({
      idOpenWeather: 3445709,
      name: 'Urubici',
      country: 'BR'
    });

    expect(city.idOpenWeather).toEqual(3445709);
    expect(city.name).toEqual('Urubici');
    expect(city.country).toEqual('BR');
  });
});
