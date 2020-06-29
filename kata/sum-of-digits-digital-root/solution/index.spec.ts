import { digitalRoot } from '.';

describe("solution", function () {
    it('should work for basic tests', () => {
        expect(digitalRoot(16)).toEqual(7);
        expect(digitalRoot(456)).toEqual(6);
    });
});