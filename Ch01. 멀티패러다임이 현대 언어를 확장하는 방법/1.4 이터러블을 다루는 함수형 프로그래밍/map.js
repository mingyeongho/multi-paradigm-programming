"use strict";
// function* map<A, B>(callback: (value: A) => B, iterable: Iterable<A>) {
//   for (const value of iterable) {
//     yield callback(value);
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const array = [1, 2, 3, 4, 5];
// const mapped = map((x) => x * 2, array);
// console.log(mapped.next());
// console.log(mapped.next());
// console.log(mapped.next());
// console.log(mapped.next());
// console.log(mapped.next());
// console.log(mapped.next());
function* map(callback, iterable) {
    const iterator = iterable[Symbol.iterator]();
    while (true) {
        const { value, done } = iterator.next();
        if (done)
            break;
        yield callback(value);
    }
}
const array = [1, 2, 3, 4, 5];
const mapped = map((x) => x * 2, array);
console.log([...mapped]);
