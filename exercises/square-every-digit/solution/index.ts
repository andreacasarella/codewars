export class Kata {
    static squareDigits(num: number) {
        return parseInt(num.toString().split('').map(v => Math.pow(parseInt(v), 2).toString()).join(''));
    }
  }