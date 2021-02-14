// weather class
class Weather {

  constructor() {
    this.wind = Math.floor((Math.random() * 100) + 1);
  }

  isStormy() {
    return this.wind >= 80 ? true : false;
  }
}
