export class Cuboid {

    constructor(public length: number, public width: number, public height: number) { }

    get volume(): number {
        return this.length * this.width * this.height;
    }

    get surfaceArea(): number {
        return 2 * ((this.length * this.width) + (this.width * this.height) + (this.height * this.length));
    }

}

export class Cube extends Cuboid {
    constructor(length: number) {
        super(length, length, length);
    }
}
