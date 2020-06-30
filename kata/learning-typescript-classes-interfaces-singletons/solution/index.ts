export class SingletonCounter {

    private static instance: SingletonCounter;

    private constructor(private _counter: number = 0) { }

    static getInstance(): SingletonCounter {
        if (this.instance) return this.instance;
        this.instance = new SingletonCounter();
        return this.instance;
    }

    public inc(): number {
        return this._counter += 1;
    }
}
