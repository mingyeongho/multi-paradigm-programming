"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* map(callback, iterable) {
    for (const value of iterable) {
        yield callback(value);
    }
}
const array = [1, 2, 3, 4];
const mapped = map((x) => x * 2, array);
console.log([...mapped]); // [2, 4, 6, 8]
