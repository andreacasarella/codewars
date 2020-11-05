export const findOdd = (xs: number[]): number => {
    let counts: Map<number, number> = new Map<number, number>();
    let result = 0;
    xs.sort().forEach((value) => counts.set(value, (counts.get(value) || 0) + 1))
    const even = (n: number): boolean => n % 2 === 0;
    counts.forEach((value, key) => result = even(value) ? result : key)
    return result;
};

