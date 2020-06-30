import { join } from ".";

describe('join', () => {
    it("should return string as it is", () => {
        expect(join("Hello")).toEqual("Hello");
    });
    it("should return joined string in case of string[]", () => {
        let arr = ["Hello", "world!"];
        expect(join(arr, ", ")).toEqual("Hello, world!");
    });
});
