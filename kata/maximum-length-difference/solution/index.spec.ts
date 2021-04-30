import { mxdiflg } from '.';

describe("mxdiflg", function () {
    it("sample", function () {
        const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
        const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
        expect(mxdiflg(s1, s2)).toEqual(13);
    });
});
