"use strict";
// function* filter<A>(callback: (value: A) => boolean, iterable: Iterable<A>) {
//   for (const value of iterable) {
//     if (callback(value)) yield value;
//   }
// }
Object.defineProperty(exports, "__esModule", { value: true });
// const array = [1, 2, 3, 4, 5];
// const filtered = filter((x) => x % 2 === 0, array);
// console.log([...filtered]);
function* filter(callback, iterable) {
    const iterator = iterable[Symbol.iterator]();
    while (true) {
        const { value, done } = iterator.next();
        if (done)
            break;
        if (callback(value))
            yield value;
    }
}
const array = [1, 2, 3, 4, 5];
const filtered = filter((x) => x % 2 === 0, array);
console.log([...filtered]);
