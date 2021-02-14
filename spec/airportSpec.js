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

    it('will not allow a plane to land if the hangar is full', () => {
      for (var i = 0; i < 10; i++) {
        heathrow.land(plane);
      }
      let jet = new Plane('jet');
      expect(heathrow.land(jet)).toEqual('Hangar is full!');
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
      expect(heathrow.hangar).toContain(boeing747);
      expect(heathrow.hangar).toContain(biplane);
    });
  });

  describe('.hangarCapacity', () => {

    it('has a default capacity of ten', () => {
      expect(heathrow.hangarCapacity).toEqual(10);
    });

    it('can be overridden when building a new airport', () => {
      let stanstead = new Airport(12);
      expect(stanstead.hangarCapacity).toEqual(12);
    });
  });
});
