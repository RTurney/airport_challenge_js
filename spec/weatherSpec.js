describe('Weather', () => {

  let weather;

  beforeEach(() => {
    weather = new Weather();
  });
  describe('properties', () => {

    it('is a class', () => {
      expect(weather).toBeInstanceOf(Weather);
    });

    it('has a wind factor property', () => {
      expect(weather.wind).toBeInstanceOf(Number);
    });
  });

  describe('.isStormy', () => {

    it('will return true if wind is over 80', () => {
      spyOn(weather, "isStormy").and.returnValue(true);
      expect(weather.isStormy()).toBe(true);
    });

    it('will return false if wind is below 80', () => {
      spyOn(weather, "isStormy").and.returnValue(false);
      expect(weather.isStormy()).toBe(false);
    });
  });
});
