import { isValidCoordinates } from '.';

describe("solution", function () {
    it("exampleTests", function () {
        let i, y;
        const ValidCoordinates = [
            "-23, 25",
            "4, -3",
            "24.53525235, 23.45235",
            "04, -23.234235",
            "43.91343345, 143"
        ];
        for (i = 0; i < ValidCoordinates.length; i++) {
            expect(isValidCoordinates(ValidCoordinates[i])).toBe(true);
        }

        const InvalidCoordinates = [
            "23.234, - 23.4234",
            "2342.43536, 34.324236",
            "N23.43345, E32.6457",
            "99.234, 12.324",
            "6.325624, 43.34345.345",
            "0, 1,2",
            "0.342q0832, 1.2324",
            "23.245, 1e1"
        ];
        for (y = 0; y < ValidCoordinates.length; y++) {
            expect(isValidCoordinates(InvalidCoordinates[i])).toBe(false);
        }
    });
});
