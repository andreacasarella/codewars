export class Kata {
    static dnaStrand(dna: string) {
        const complements: any = { A: 'T', T: 'A', C: 'G', G: 'C' };
        return dna.split('').map(v => complements[v]).join('');
    }
}