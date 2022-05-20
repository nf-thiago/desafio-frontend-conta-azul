export default class City {
  constructor(obj) {
    this.idOpenWeather = (obj && obj.idOpenWeather) || undefined;
    this.name = (obj && obj.name) || undefined;
    this.country = (obj && obj.country) || undefined;
  }
}
