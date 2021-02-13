describe('Airport', () => {

  beforeEach(() => {
    heathrow = new Airport;
    plane = new Plane;
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
  });
});
