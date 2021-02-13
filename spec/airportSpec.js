describe('Airport', () => {

  beforeEach(() => {
    heathrow = new Airport;
    plane = new Plane;
  });

  it('is an Airport', () => {
    expect(heathrow).toBeInstanceOf(Airport);
  });

  it('has an empty hangar',() => {
    expect(heathrow.hangar).toEqual([]);
  });

  describe('.land()', () => {

    it('will land a plane in the hangar', () => {
      heathrow.land(plane);
      expect(heathrow.hangar).toContain(plane);
    });
  });
});
