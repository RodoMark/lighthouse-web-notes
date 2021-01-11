# HIGHER ORDER FUNCTIONS

`.filter`

### Filters out the value that is specified and returns it

```javascript
const animalsArr = ["Cat", "Dog", "Mouse"];
array.filter((x) => "Dog");
// ["Dog"]
```

```javascript
const  animalsObj = { species: ["Cat", "Dog", "Mouse"] }
animals.filter(animals => animals.species === "Dog"
```

`.map`

### Carries out a callback function on all the elements

```javascript
array.map((x) => x + "dog");
```

`.reduce`

### Can be used to express any list transformation.

- The first value is the function.
- The second value is the starting value (which could be a number, array, object etc...)

```javascript
const orders = [{amount: 250}, {amount: 400}, {amount: 100}, {amount: 325}]
const totalAmount = numbers.reduce((function(sum, order) {
  return sum = sum + order.amount
}, 0) // 1075
```

`.sort()`

### Sorts the elements of an array in place and returns sorted array.

```javascript
let numbers = [4, 2, 1, 3, 5];
numbers.sort((a, b) => a - b);

// [1, 2, 3, 4, 5]
```
