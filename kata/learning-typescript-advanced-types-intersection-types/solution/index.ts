export function intersect<T, U>(first: T, second: U): T & U {
    let result = <T & U>{} as any;
    for (let key in first) {
        if ((second as any).hasOwnProperty(key)) {
            (result as any)[key] = (first as any)[key];
        }
    }
    return result;
}
