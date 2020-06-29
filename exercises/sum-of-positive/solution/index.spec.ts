import { Kata } from '.';

describe("squareDigits", function () {
    it("should pass these sample test", function () {
        expect(Kata.positiveSum([1, 2])).toBe(3);
        expect(Kata.positiveSum([1, 2, 3, 4, 5])).toBe(15);
        expect(Kata.positiveSum([1, -2, 3, 4, 5])).toBe(13);
        expect(Kata.positiveSum([])).toBe(0);
        expect(Kata.positiveSum([-1, -2, -3, -4, -5])).toBe(0);
        expect(Kata.positiveSum([-1, 2, 3, 4, -5])).toBe(9);
    });
});
