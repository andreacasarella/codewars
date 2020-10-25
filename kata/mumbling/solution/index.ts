export function accum(s: string): string {
    const repeat = (char: string, index: number): string => {
        let res = char.toLowerCase().repeat(index+1)
        return res.charAt(0).toUpperCase().concat(res.slice(1));
    }
    return s.split('').map((v, i) => repeat(v, i)).join('-');
}