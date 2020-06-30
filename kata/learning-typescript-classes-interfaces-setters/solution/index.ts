declare var ICuboid: {
    new(length: number): ICuboid;
}

interface ICuboid {
    /** Length of the cube */
    length: number;
    /** Surface area of the cube */
    surfaceArea: number;
    /** Volume of the cube */
    volume: number;
}

export class Cube implements ICuboid {

    constructor(public length: number) { }

    get surfaceArea(): number { return Math.pow(this.length, 2) * 6 }
    set surfaceArea(surface: number) {
        this.length = Math.sqrt(surface / 6);
    }

    get volume(): number { return Math.pow(this.length, 3) }
    set volume(volume: number) {
        this.length = Math.cbrt(volume);
    }



}