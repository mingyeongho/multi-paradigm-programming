"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEach(callback, iterable) {
    for (const value of iterable) {
        callback(value);
    }
}
forEach(console.log, [1, 2, 3, 4, 5]);
