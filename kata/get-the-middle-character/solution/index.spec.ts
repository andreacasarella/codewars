import {Challenge} from "./index";

function test(string: string, expected: string) {
    expect(Challenge.getMiddle(string)).toEqual(expected);
}

describe("Challenge", function () {
    it("should get middle char", function () {
        test("test", "es");
        test("testing", "t");
    });
});
