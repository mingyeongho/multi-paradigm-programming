const naturals = (end = Infinity) => {
  let n = 1;
  return {
    next(): IteratorResult<number> {
      return n <= end
        ? { done: false, value: n++ }
        : { done: true, value: undefined };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};

const iter = naturals(3);

console.log(iter.next()); // { done: false; value: 1 }
console.log(iter.next()); // { done: false; value: 2 }

for (const num of iter) {
  console.log(num); // 3
}

const array = [1, 2, 3];
const arrayIterator = array[Symbol.iterator]();

for (const num of arrayIterator) {
  console.log(num);
}

// 1
// 2
// 3

const set = new Set([1, 2, 3]);
const setIterator = set[Symbol.iterator]();

for (const num of setIterator) {
  console.log(num);
}

// 1
// 2
// 3

const map = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
const mapIterator = map[Symbol.iterator]();

for (const num of mapIterator) {
  console.log(num);
}

// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]

const values = map.values();
values.next();
for (const v of values) {
  console.log(v);
}

// 1
// 2
// 3
