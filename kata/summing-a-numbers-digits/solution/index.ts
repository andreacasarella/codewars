export function sumDigits(number: number): number {
    return number.toString().split('').map(v => (/[\d]/g).test(v) ? parseInt(v) : 0).reduce((sum, n) => sum + n);
}