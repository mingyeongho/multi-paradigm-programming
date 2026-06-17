"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function* generator() {
    let number = 1;
    const age = 28;
    yield number;
    number++;
    yield { number, age };
    number *= 4;
    yield number;
    number **= 2;
    yield number;
    number = 0;
    yield number;
}
const iter = generator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
function* gen() {
    yield 1;
    yield* [2, 3];
    yield 4;
}
const ite = gen();
console.log(ite.next()); // { done: false, value: 1 }
console.log(ite.next()); // { done: false, value: 2 }
console.log(ite.next()); // { done: false, value: 3 }
console.log(ite.next()); // { done: false, value: 4 }
console.log(ite.next()); // { done: true, value: undefined }
function* reverse(arrayLike) {
    let idx = arrayLike.length;
    while (idx) {
        yield arrayLike[--idx];
    }
}
const array = [1, 2, 3, 4, 5];
const reversed = reverse(array);
console.log(reversed.next());
console.log(reversed.next());
console.log(reversed.next());
console.log(reversed.next());
console.log(reversed.next());
console.log(reversed.next());
