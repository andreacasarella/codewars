import { replaceVogals } from '.';

describe("solution", function () {
    it("basic Tests", function () {
        expect(replaceVogals('a')).toEqual('?');
        expect(replaceVogals('ab')).toEqual('?b');
    });
});