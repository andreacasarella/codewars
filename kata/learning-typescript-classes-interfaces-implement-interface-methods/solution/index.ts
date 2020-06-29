interface IGeometricFigure {
    radius: number,
    area: () => number;
    perimeter: () => number;
}

export class Square implements IGeometricFigure {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    area(): number {
        return Math.pow(this.radius, 2);
    };

    perimeter(): number {
        return this.radius * 4;
    };
}

export class Circle implements IGeometricFigure {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.pow(this.radius, 2) * Math.PI;
    };

    perimeter(): number {
        return this.radius * 2 * Math.PI;
    };
}
