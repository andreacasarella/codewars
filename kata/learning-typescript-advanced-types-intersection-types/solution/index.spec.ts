import { intersect } from '.';

describe("intersect", () => {
    it("should contain properties only from first and second objects", () => {
        var obj1 = { a: 1 };
        var obj2 = { a: 2, b: 2 };
        var intersection = intersect(obj1, obj2);
        expect(intersection).toEqual({ a: 1 });
        var obj3 = { c: 3, d: 4 };
        var intersection2 = intersect(obj2, obj3);
        expect(intersection2).toEqual({});
    });
});
