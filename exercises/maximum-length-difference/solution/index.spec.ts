import { mxdiflg } from '.';

describe("mxdiflg", function () {
    it("sample", function () {
        var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
        var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
        expect(mxdiflg(s1, s2)).toEqual(13);
    });
});