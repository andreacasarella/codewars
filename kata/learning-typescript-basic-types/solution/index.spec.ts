import {
  Color,
  var1Boolean,
  var2Decimal,
  var3Hex,
  var4Binary,
  var5Octal,
  var6String,
  var7Array,
  var8NumericArray,
  var9Tuple,
  var10Enum,
  var12VoidFunction,
  var13Null,
  var14Undefined,
  var15NeverFunction
} from ".";

describe("Checking variables", () => {
  it("var1Boolean should be equal to true", () => {
    expect(var1Boolean).toBe(true);
  });
  it("var2Decimal should be equal to 13", () => {
    expect(var2Decimal).toBe(13);
  });
  it("var3Hex should be equal to 0xf00d", () => {
    expect(var3Hex).toBe(0xf00d);
  });
  it("var4Binary should be equal to 0b111111", () => {
    expect(var4Binary).toBe(0b111111);
  });
  it("var5Octal should be equal to 0o744", () => {
    expect(var5Octal).toBe(0o744);
  });
  it("var6String should be equal to 'Hello, world!'", () => {
    expect(var6String).toBe('Hello, world!');
  });
  
  it("var7Array should be equal to [1, 'test', {a: 3}, 4, 5]", () => {
    expect(var7Array).toEqual([1, 'test', {a: 3}, 4, 5]);
  });
  
  it("var8NumericArray should be equal to [1, 2, 3, 4, 5]", () => {
    expect(var8NumericArray).toEqual([1, 2, 3, 4, 5]);
  });
  it("var9Tuple should be equal to ['key', 12345]", () => {
    expect(var9Tuple).toEqual(['key', 12345]);
  });
  it("var10Enum should be equal to Color.Blue", () => {
    expect(var10Enum).toBe(Color.Blue);
  });
  it("var11ArrayOfAny should be equal to [1, 'test', {a: 3}, 4, 5]", () => {
     expect(var7Array).toEqual([1, 'test', {a: 3}, 4, 5]);
  });
  it("var12VoidFunction should be void function", () => {
    expect(typeof(var12VoidFunction)).toBe('function');
    expect(var12VoidFunction()).toBe(undefined);
  });
  it("var13Null should be equal to null", () => {
    expect(var13Null).toBe(null);
  });
  it("var14Undefined should be equal to undefined", () => {
    expect(var14Undefined).toBe(undefined);
  });
  it("var15NeverFunction should be never function", () => {
    expect(typeof(var15NeverFunction)).toBe('function');
    try {
      expect(var15NeverFunction()).toBe(undefined);
    }
    catch (e) {
    }
  });
});
