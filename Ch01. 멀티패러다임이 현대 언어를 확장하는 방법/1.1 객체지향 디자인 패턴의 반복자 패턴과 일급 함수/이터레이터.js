"use strict";
/**
 * lib.es2015.iterable.d.ts
 *
 * // 반복자가 아직 완료되지 않았다.
 * interface IteratorYieldResult<TYield> {
 *   done?: false;
 *   value: TYield
 * }
 *
 * // 반복자가 완료되었다.
 * interface IteratorReturnResult<TReturn> {
 *   done: true;
 *   value: TReturn
 * }
 *
 * type IteratorResult<T, TReturn = any> = IteratorYieldResult<T> | IteratorReturnResult<TReturn>;
 *
 * interface Iterator<T, TReturn = any, TNext = any> {
 *   next(...[value]: [] | [TNext]): IteratorResult<T, TReturn>;
 *   return?(value?: TReturn): IteratorResult<T, TReturn>;
 *   throw?(e?: any): IteratorResult<T, TReturn>;
 * }
 */
Object.defineProperty(exports, "__esModule", { value: true });
// ============= ArrayLike로부터 Iterator 생성하기 =============
/**
 * lib.es5.d.td
 *
 * interface ArrayLike<T> {
 *   readonly length: number;
 *   readonly [n: number]: T;
 * }
 */
const ArrayLikeIterator = (arrayLike) => {
    let idx = 0;
    const next = () => {
        if (idx < arrayLike.length) {
            return {
                done: false,
                value: arrayLike[idx++],
            };
        }
        else {
            return {
                done: true,
                value: undefined,
            };
        }
    };
    return {
        next,
    };
};
const arrayLike = {
    length: 3,
    0: 10,
    1: 20,
    2: 30,
};
const str = "mingh";
const strIterator = ArrayLikeIterator(str);
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
console.log(strIterator.next());
const arrayLikeIterator = ArrayLikeIterator(arrayLike);
console.log(arrayLikeIterator.next()); // { done: false, value: 10 }
console.log(arrayLikeIterator.next()); // { done: false, value: 20 }
console.log(arrayLikeIterator.next()); // { done: false, value: 30 }
console.log(arrayLikeIterator.next()); // { done: true, value: undefined }
const array = ["a", "b", "c"];
const arrayIterator = ArrayLikeIterator(array);
console.log(arrayIterator.next()); // { done: false, value: 'a' }
console.log(arrayIterator.next()); // { done: false, value: 'b' }
console.log(arrayIterator.next()); // { done: false, value: 'c }
console.log(arrayIterator.next()); // { done: true, value: undefined }
// ============= ArrayLike를 역순으로 순회하는 이터레이터 만들기 =============
const reverse = (arrayLike) => {
    let idx = arrayLike.length;
    return {
        next: () => {
            if (idx === 0) {
                return {
                    done: true,
                    value: undefined,
                };
            }
            else {
                return {
                    done: false,
                    value: arrayLike[--idx],
                };
            }
        },
    };
};
const array2 = ["a", "b", "c"];
const reverseIterator = reverse(array2);
console.log(array2);
console.log(reverseIterator.next()); // { done: false, value: "c" }
console.log(reverseIterator.next()); // { done: false, value: "b" }
console.log("다른 작업");
console.log(reverseIterator.next()); // { done: false, value: "a" }
console.log(reverseIterator.next()); // { done: true, value: undefined }
const pow = (array) => {
    let idx = 0;
    return {
        next: () => {
            if (idx < array.length) {
                return {
                    done: false,
                    value: array[idx++] ** 2,
                };
            }
            else {
                return {
                    done: true,
                    value: undefined,
                };
            }
        },
    };
};
const nums = [1, 2, 3];
const powIter = pow(nums);
console.log(powIter.next()); // { done: false, value: 1 }
console.log(powIter.next()); // { done: false, value: 4 }
console.log(powIter.next()); // { done: false, value: 9 }
console.log(powIter.next()); // { done: true, value: undefined }
