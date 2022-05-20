import Weather from '@/models/Weather';

describe('Weather', () => {
  it('is an empty instance in the constructor', () => {
    let weather = new Weather();

    expect(weather.temp).toBeUndefined();
    expect(weather.humidity).toBeUndefined();
    expect(weather.pressure).toBeUndefined();
    expect(weather.lastUpdateDate).toBeInstanceOf(Date);
  });

  it('is a populated instance in the constructor', () => {
    let lastUpdateDate = new Date();

    let weather = new Weather({
      temp: 25,
      humidity: 50,
      pressure: 1000,
      lastUpdateDate: lastUpdateDate
    });

    expect(weather.temp).toEqual(25);
    expect(weather.humidity).toEqual(50);
    expect(weather.pressure).toEqual(1000);
    expect(weather.lastUpdateDate).toEqual(lastUpdateDate);
  });

  describe('getLastUpdateHourFormated()', () => {
    it('return last update hour formated', () => {
      let lastUpdateDate = new Date('2022-05-18T18:30:00');

      let weather = new Weather({
        temp: 25,
        humidity: 50,
        pressure: 1000,
        lastUpdateDate: lastUpdateDate
      });

      expect(weather.getLastUpdateHourFormated()).toEqual('06:30 PM');
    });
  });

  describe('isTempBlue()', () => {
    it('return false', () => {
      let weather = new Weather({
        temp: 25,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.isTempBlue()).toBe(false);
    });

    it('return true', () => {
      let weather = new Weather({
        temp: 5,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.isTempBlue()).toBe(true);
    });
  });

  describe('isTempOrange()', () => {
    it('return false', () => {
      let weather = new Weather({
        temp: 5,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.isTempOrange()).toBe(false);
    });

    it('return true', () => {
      let weather = new Weather({
        temp: 25,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.isTempOrange()).toBe(true);
    });
  });

  describe('isTempRed()', () => {
    it('return false', () => {
      let weather = new Weather({
        temp: 25,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.isTempRed()).toBe(false);
    });

    it('return true', () => {
      let weather = new Weather({
        temp: 30,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.isTempRed()).toBe(true);
    });
  });

  describe('getTimeCacheToExpire()', () => {
    it('return false', () => {
      let weather = new Weather({
        temp: 25,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.getTimeCacheToExpire()).toBeGreaterThan(0);
    });

    it('return true', () => {
      let lastUpdateDate = new Date('2022-05-18T18:30:00');

      let weather = new Weather({
        temp: 30,
        humidity: 50,
        pressure: 1000,
        lastUpdateDate: lastUpdateDate
      });

      expect(weather.getTimeCacheToExpire()).toBeLessThan(0);
    });
  });

  describe('isTimeCacheExpired()', () => {
    it('return false', () => {
      let weather = new Weather({
        temp: 25,
        humidity: 50,
        pressure: 1000
      });

      expect(weather.isTimeCacheExpired()).toBe(false);
    });

    it('return true', () => {
      let lastUpdateDate = new Date('2022-05-18T18:30:00');

      let weather = new Weather({
        temp: 30,
        humidity: 50,
        pressure: 1000,
        lastUpdateDate: lastUpdateDate
      });

      expect(weather.isTimeCacheExpired()).toBe(true);
    });
  });
});
