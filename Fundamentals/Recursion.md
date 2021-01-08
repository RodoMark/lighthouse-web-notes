# RECURSION

## Functions that call themselves are recursive.

#### All recursive functions must have a `base case` and a `recursive case`.

Example

```Javascript
const countToTen = function (number) {
  if (number <= 10) {
    console.log(number);
    countToTen(number + 1);
  }
};

countToTen(0) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
countToTen(5) // 5, 6, 7, 8, 9, 10
countToTen(11) // Won't count
```
