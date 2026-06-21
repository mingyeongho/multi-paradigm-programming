"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEach(callback, iterable) {
    for (const value of iterable) {
        callback(value);
    }
}
function* map(callback, iterable) {
    for (const value of iterable) {
        yield callback(value);
    }
}
function* filter(callback, iterable) {
    for (const value of iterable) {
        if (callback(value))
            yield value;
    }
}
function* naturals(end = Infinity) {
    let n = 1;
    while (n <= end) {
        yield n++;
    }
}
forEach(console.log, map((x) => x * 10, filter((x) => x % 2 === 1, naturals(5))));
