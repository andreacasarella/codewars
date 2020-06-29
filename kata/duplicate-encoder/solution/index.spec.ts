import { duplicateEncode } from ".";

// TODO Add your tests here
describe("example", function() {
  it("test", function() {
    expect(duplicateEncode("din")).toBe("(((");
    expect(duplicateEncode("recede")).toEqual("()()()");
    expect(duplicateEncode("Success")).toEqual(")())())");
    expect(duplicateEncode("(( @")).toEqual("))((");
  });
});