import { disemvowel } from '.';

describe("disemvowel", function () {
    it("disemvowel test", function () {
        expect(disemvowel("This website is for losers LOL!")).toEqual("Ths wbst s fr lsrs LL!");
    });
});