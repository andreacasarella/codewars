import { Circle, Square } from ".";

var EPSILON = 0.000001;

describe("The Square class", () => {
    it("should calculate area and perimeter correctly", () => {
        var square = new Square(1);
        expect(square.area()).toEqual(1);
        expect(square.perimeter()).toEqual(4);

        square = new Square(2);
        expect(square.area()).toEqual(4);
        expect(square.perimeter()).toEqual(8);
    });
});

describe("The Circle class", () => {
    it("should calculate area and perimeter correctly", () => {
        var circle = new Circle(1);
        expect(circle.area()).toEqual(Math.PI);
        expect(circle.perimeter()).toEqual(2 * Math.PI);

        circle = new Circle(2);
        expect(circle.area()).toEqual(4 * Math.PI);
        expect(circle.perimeter()).toEqual(4 * Math.PI);
    });
});
