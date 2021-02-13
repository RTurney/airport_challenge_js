describe('Airport', () => {

  beforeEach(() => {
    heathrow = new Airport;
  });

  it('is an Airport', () => {
    expect(heathrow).toBeInstanceOf(Airport);
  });

  it('has an empty hangar',() => {
    expect(heathrow.hangar).toEqual([]);
  });

  describe('.land', () => {

  });
});
