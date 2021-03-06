import { Cube } from ".";

describe("The Cube class", () => {
    it("should initialize properly and have working getters and setters", () => {
        const cube = new Cube(1);
        expect(cube.length).toEqual(1);
        expect(cube.surfaceArea).toEqual(6);
        expect(cube.volume).toEqual(1);

        cube.length = 2;
        expect(cube.surfaceArea).toEqual(24);
        expect(cube.volume).toEqual(8);

        cube.surfaceArea = 54;
        expect(cube.length).toEqual(3);
        expect(cube.volume).toEqual(27);

        cube.surfaceArea = 96;
        expect(cube.length).toEqual(4);
        expect(cube.volume).toEqual(64);

        cube.volume = 125;
        expect(cube.length).toBeCloseTo(5, 0.000001);
        expect(cube.surfaceArea).toBeCloseTo(150, 0.000001);

        cube.volume = 1000;
        expect(cube.length).toBeCloseTo(10, 0.000001);
        expect(cube.surfaceArea).toBeCloseTo(600, 0.000001);
    });
});
