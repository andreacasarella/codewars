export class Kata {
    static positiveSum(arr: number[]): number {
        return arr.filter(v => v > 0).reduce((acc, n) => acc + n, 0);
    }
}