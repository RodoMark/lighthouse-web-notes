# CALLBACKS

## Callbacks allow you to reuse a function by passing it smaller functions

```javascript
const filterWords = function (wordsArr, callback) {
  const output = [];
  for (let word of wordsArr) {
    // I can pass in a callback here
    if (word === callback(word)) output.push(word);
  }
  return output;
};

// Word length function
const wordLength = function (word, length) {
  return word.length === length;
};

// First letter in word
const firstLetterInWord = function (word, letter) {
  return word[0] === letter;
};
```

### You can store functions into variables

### You can store properties into variables and call the property as a function

```javascript
const log = console.log;
log("Hello world");
```

This will print "Hello world" to the console.
