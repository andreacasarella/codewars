export function solve(s: string): number {
    const alpabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return s.split(/[aeiou]/g).
        filter(substring => substring).
        map(substring => substring.split('').
            map(char => alpabeth.split('').indexOf(char.toUpperCase()) + 1).reduce((v, acc) => acc += v, 0)
        ).reduce((v, max) => Math.max(max, v), 0);
}
