function forEach<A>(callback: (value: A) => void, iterable: Iterable<A>) {
  for (const value of iterable) {
    callback(value);
  }
}

forEach(console.log, [1, 2, 3, 4, 5]);
