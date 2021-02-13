describe('Plane', () => {

  it('is a plane class', () => {
    boeing747 = new Plane;
    expect(boeing747).toBeInstanceOf(Plane);
  });
});
