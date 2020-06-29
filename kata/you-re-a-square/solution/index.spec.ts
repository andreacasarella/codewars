import isSquare from '.';

describe("solution", function() {
  it("should work for some examples", function() {
    expect(isSquare(-1)).toBe(false);
    expect(isSquare( 0)).toBe(true);
    expect(isSquare( 3)).toBe(false);
    expect(isSquare( 4)).toBe(true);
    expect(isSquare(25)).toBe(true);
    expect(isSquare(26)).toBe(false);
  });
});