export function highAndLow(numbers: string): string {
    return `${Math.max.apply(null, numbers.split(' ').map(v => parseFloat(v)))} ${Math.min.apply(null, numbers.split(' ').map(v => parseFloat(v)))}`;
}
