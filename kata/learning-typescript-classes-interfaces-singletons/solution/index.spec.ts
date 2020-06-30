import { SingletonCounter } from ".";

describe("The SingletonCounter class", () => {
    var count = 4;

    it("should have correct inc() method", () => {
        var counter = SingletonCounter.getInstance();
        expect(counter.inc()).toEqual(1);
        expect(counter.inc()).toEqual(2);
        expect(counter.inc()).toEqual(3);
        expect(counter.inc()).toEqual(4);
    });

    it("should work as a singleton", () => {
        var counter1 = SingletonCounter.getInstance();
        var counter2 = SingletonCounter.getInstance();
        expect(counter1.inc()).toEqual(++count);
        expect(counter2.inc()).toEqual(++count);
        expect(counter1.inc()).toEqual(++count);
        expect(counter2.inc()).toEqual(++count);
    });
});
