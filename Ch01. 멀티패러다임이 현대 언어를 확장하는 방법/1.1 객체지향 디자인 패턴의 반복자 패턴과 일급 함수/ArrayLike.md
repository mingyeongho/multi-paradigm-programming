## ArrayLike

`length`와 `숫자 인덱스`만 가지는 객체. (유사 배열 객체)

```ts
// lib.es5.d.ts
interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}
```

### 예시

#### 문자열

```ts
const str = "mingh";

console.log(str[0]); // m
console.log(str.length); // 5
```

#### DOM NodeList

```ts
const divs = document.querySelectorAll("div");

console.log(divs[0]);
console.log(divs.length);
```

#### arguments

[arguments 객체](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments)

### 배열과 다른 점

`ArrayLike`는 `Array.prototype`을 상속받지 않음.

### Array.from

`Array.from` 메서드를 통해 배열 객체로 만들 수 있다.

e.g.

```ts
const divs = document.querySelectorAll("div");
const elements = Array.from(divs);
elements.forEach((element) => {...});
```
