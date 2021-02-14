describe('Weather', () => {

  let weather;

  beforeEach(() => {
    weather = new Weather();
  });
  describe('properties', () => {

    it('is a class', () => {
      expect(weather).toBeInstanceOf(Weather);
    });
  });
});
