export default function isSquare(n: number): boolean {
    return Math.sqrt(n) - Math.floor(Math.sqrt(n)) == 0;
};
