export abstract class Animal {

    protected measure: number;

    /** @param {number} value The length of the animal in parrots. */
    protected constructor(public value: number) { this.measure = value }

    convertTo(someone: Animal): number {
        return someone.value / this.measure;
    }
}

export class Boa extends Animal {
    constructor() { super(1); }
}

export class Parrot extends Animal {
    constructor() { super(38); }
}

export class Monkey extends Animal {
    constructor() { super(5); }
}
