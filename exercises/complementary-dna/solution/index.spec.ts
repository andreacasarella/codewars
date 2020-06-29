import { Kata } from '.';

describe("dnaStrand", function () {
    it("Sample tests", function () {
        expect(Kata.dnaStrand("AAAA")).toEqual("TTTT");
        expect(Kata.dnaStrand("ATTGC")).toEqual("TAACG");
        expect(Kata.dnaStrand("GTAT")).toEqual("CATA");
    });
});