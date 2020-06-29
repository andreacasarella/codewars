export const digitalRoot = (n: number): number => {
    while (n.toString().length > 1)
        n = n.toString().split('').reduce((sum, v) => sum + parseInt(v), 0);
    return n;
};