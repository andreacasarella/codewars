import { solve } from '.';

describe("Basic tests", function () {
    it("Testing for 'zodiac', expecting: 26", () => expect(solve("zodiac")).toBe(26));
    it("Testing for 'chruschtschov', expecting: 80", () => expect(solve("chruschtschov")).toBe(80));
    it("Testing for 'khrushchev', expecting: 38", () => expect(solve("khrushchev")).toBe(38));
    it("Testing for 'strength', expecting: 57", () => expect(solve("strength")).toBe(57));
    it("Testing for 'catchphrase', expecting: 73", () => expect(solve("catchphrase")).toBe(73));
    it("Testing for 'twelfthstreet', expecting: 103", () => expect(solve("twelfthstreet")).toBe(103));
    it("Testing for 'mischtschenkoana', expecting: 80", () => expect(solve("mischtschenkoana")).toBe(80));
});
