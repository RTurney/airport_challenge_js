describe('Airport', () => {

  beforeEach(() => {
    heathrow = new Airport;
  });

  it('is an Airport', () => {
    expect(heathrow).toBeInstanceOf(Airport);
  });
});
