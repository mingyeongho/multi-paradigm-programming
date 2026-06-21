function forEach<A>(callback: (value: A) => void, iterable: Iterable<A>) {
  for (const value of iterable) {
    callback(value);
  }
}

function* map<A, B>(callback: (value: A) => B, iterable: Iterable<A>) {
  for (const value of iterable) {
    yield callback(value);
  }
}

function* filter<A>(callback: (value: A) => boolean, iterable: Iterable<A>) {
  for (const value of iterable) {
    if (callback(value)) yield value;
  }
}

function* naturals(end = Infinity) {
  let n = 1;
  while (n <= end) {
    yield n++;
  }
}

forEach(
  console.log,
  map(
    (x) => x * 10,
    filter((x) => x % 2 === 1, naturals(5)),
  ),
);
