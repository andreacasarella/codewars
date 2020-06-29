export function mxdiflg(a1: string[], a2: string[]) {
    let mxdiflg = -1;
    a1.forEach((v1) => {
        a2.forEach((v2) => {
            mxdiflg = mxdiflg < Math.abs(v1.length - v2.length) ? Math.abs(v1.length - v2.length) : mxdiflg;
        })
    })
    return mxdiflg;
}