describe('Airport', () => {

  let heathrow;
  let plane;

  beforeEach(() => {
    heathrow = new Airport;
    plane = new Plane('plane');
  });

  describe('properties', () => {
    it('is an Airport', () => {
      expect(heathrow).toBeInstanceOf(Airport);
    });

    it('has an empty hangar',() => {
      expect(heathrow.hangar).toEqual([]);
    });
  });

  describe('.land()', () => {

    it('will land a plane in the hangar', () => {
      heathrow.land(plane);
      expect(heathrow.hangar).toContain(plane);
    });
  });

  describe('.takeOff()', () => {

    it('will take a plane off from the airport', () => {
      heathrow.land(plane);
      heathrow.takeOff(plane);
      expect(heathrow.hangar).not.toContain(plane);
    });

    it('will take off a specific plane from the hangar', () => {
      let jet = new Plane('jet');
      let boeing747 = new Plane('boeing747');
      let biplane = new Plane('biplane');
      heathrow.land(plane);
      heathrow.land(jet);
      heathrow.land(boeing747);
      heathrow.land(biplane);
      heathrow.takeOff(jet);

      expect(heathrow.hangar).not.toContain(jet);
      expect(heathrow.hangar).toContain(plane);
    });
  });
});
