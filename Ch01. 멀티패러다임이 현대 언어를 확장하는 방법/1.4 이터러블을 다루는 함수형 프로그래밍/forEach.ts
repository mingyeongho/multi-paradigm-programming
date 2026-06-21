// function forEach<A>(callback: (value: A) => void, iterable: Iterable<A>) {
//   for (const value of iterable) {
//     callback(value);
//   }
// }

// const array = [1, 2, 3, 4, 5];
// forEach(console.log, array);

function forEach<A>(callback: (value: A) => void, iterable: Iterable<A>) {
  const iterator = iterable[Symbol.iterator]();
  let result = iterator.next();
  while (!result.done) {
    callback(result.value);
    result = iterator.next();
  }
}

const set = new Set([4, 5, 6]);
forEach(console.log, set);
