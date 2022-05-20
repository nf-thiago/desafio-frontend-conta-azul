const TEMP_LIMIT_BLUE = 5;
const TEMP_LIMIT_RED = 25;
const TIME_CACHE_EXPIRATION = 10 * (60 * 1000);

export default class Weather {
  constructor(obj) {
    this.temp = (obj && obj.temp) || undefined;
    this.humidity = (obj && obj.humidity) || undefined;
    this.pressure = (obj && obj.pressure) || undefined;
    this.lastUpdateDate = (obj && obj.lastUpdateDate && new Date(obj.lastUpdateDate)) || new Date();
  }

  getLastUpdateHourFormated() {
    return this.lastUpdateDate.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  }

  isTempBlue() {
    return parseInt(this.temp, 10) <= TEMP_LIMIT_BLUE;
  }

  isTempOrange() {
    return parseInt(this.temp, 10) > TEMP_LIMIT_BLUE && parseInt(this.temp, 10) <= TEMP_LIMIT_RED;
  }

  isTempRed() {
    return parseInt(this.temp, 10) > TEMP_LIMIT_RED;
  }

  getTimeCacheToExpire() {
    let timeExpired = this.lastUpdateDate.getTime() + TIME_CACHE_EXPIRATION;
    return timeExpired - new Date().getTime();
  }

  isTimeCacheExpired() {
    let timeExpired = this.lastUpdateDate.getTime() + TIME_CACHE_EXPIRATION;
    return timeExpired <= new Date().getTime();
  }
}
