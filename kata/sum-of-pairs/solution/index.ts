export function sumPairs(ints: number[], s: number): [number, number] | void {

    const intsSet = new Set();
    for (let i = 0; i < ints.length; i++) {
        let currInt = ints[i];
        if (intsSet.has(s - currInt)) return [s - currInt, currInt];
        else intsSet.add(currInt);
    }

    /*console.time('Execution Time');

    let pairs: [number , number] | null = null;
    let secondElementIndex = ints.length - 1;

    for(let i = 0; i < ints.length; i++){
        const first = ints[i];
        for (let y = ints.length - 1; y > i; y--){
            const second = ints[y];
            if(first + second === s) {
                if(y <= secondElementIndex){
                    pairs = [first, second];
                    secondElementIndex = y;
                }
            }
        }
    }
    console.timeEnd('Execution Time');

    return !pairs ? undefined : pairs; // your code here...*/
}