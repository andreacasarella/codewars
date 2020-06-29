export function comp(a1: number[] | null, a2: number[] | null): boolean {
    return JSON.stringify(a1?.map(v => Math.pow(v, 2)).sort()) == JSON.stringify(a2?.sort());
}