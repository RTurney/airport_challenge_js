describe('Airport', () => {

  let heathrow;
  let weather;
  let storm;
  let plane;
  let jet;
  let boeing747;
  let biplane;

  beforeEach(() => {
    heathrow = new Airport;
    plane = new Plane('plane');
    weather = new Weather;
    storm = new Weather;
    jet = new Plane('jet');
    boeing747 = new Plane('boeing747');
    biplane = new Plane('biplane');
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
      spyOn(weather, "isStormy").and.returnValue(false);
      heathrow.land(plane, weather);
      expect(heathrow.hangar).toContain(plane);
    });

    it('will not allow a plane to land if the hangar is full', () => {
      spyOn(weather, "isStormy").and.returnValue(false);
      for (var i = 0; i < 10; i++) {
        heathrow.land(plane, weather);
      }

      expect(heathrow.land(jet, weather)).toEqual('Hangar is full!');
    });

    it('will not land a plane if the weather is stormy', () => {
      spyOn(storm, "isStormy").and.returnValue(true);
      expect(heathrow.land(plane, storm)).toEqual('It\'s too stormy to land!')
    });
  });

  describe('.takeOff()', () => {

    it('will take a plane off from the airport', () => {
      spyOn(weather, "isStormy").and.returnValue(false);

      heathrow.land(plane, weather);
      heathrow.takeOff(plane, weather);
      expect(heathrow.hangar).not.toContain(plane);
    });

    it('will take off a specific plane from the hangar', () => {
      spyOn(weather, "isStormy").and.returnValue(false);

      heathrow.land(plane, weather);
      heathrow.land(jet, weather);
      heathrow.land(boeing747, weather);
      heathrow.land(biplane, weather);
      heathrow.takeOff(jet, weather);

      expect(heathrow.hangar).not.toContain(jet);
      expect(heathrow.hangar).toContain(plane);
      expect(heathrow.hangar).toContain(boeing747);
      expect(heathrow.hangar).toContain(biplane);
    });

    it("prevents takeOff when wether is stormy", () => {
      spyOn(weather, "isStormy").and.returnValue(false);

      heathrow.land(plane, weather);
      heathrow.land(jet, weather);
      heathrow.land(boeing747, weather);
      heathrow.land(biplane, weather);

      spyOn(storm, "isStormy").and.returnValue(true);
      
      expect(heathrow.takeOff(plane, storm)).toEqual("It\'s too stormy to take off!");
      expect(heathrow.hangar).toContain(plane);
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
