import { sumDigits } from '.';

describe("example", function () {
    it("test", function () {
        expect(sumDigits(10)).toEqual(1);
        expect(sumDigits(99)).toEqual(18);
        expect(sumDigits(-32)).toEqual(5);
    });
});