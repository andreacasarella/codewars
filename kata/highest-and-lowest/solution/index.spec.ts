import {highAndLow} from ".";

describe("highAndLow", function() {
    it("should pass some sample tests", function() {
        expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214");
    });
});