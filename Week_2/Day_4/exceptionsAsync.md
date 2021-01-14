# ASYNCHRONOUS EXCEPTIONS

## `try-catch` will not work on asynchronous code

### This will not work

```javascript
setTimeout((inputStr, callback) => {
  callback(inputStr.toUpperCase());
  undeclared; // triggers an error
}, 3000);

try {
  upperCaseAsync("Spong Bob", (upperCaseName) => console.log(upperCaseName));
} catch (err) {
  console.log("Error: ", err.message);
}

//Three seconds later an error message will be thrown but the `try catch` won't be triggered
```

## Instead we use `error` callbacks

### This will work

```javascript
const upperCaseAsync = (inputStr, callback) => {
setTimeout(() = > {
const error = false;

    if (error) {
      // do something
      // exit the function
      // callback with an error
      callback(error, null);
      return;
    }

    callback(null, inputStr.toUpperCase()) => console.log(str));

}, 3000)
}

//How do we handle errors with async code

upperCaseAsync("SpongBob Squarepants", (err, str) => {
  if (err) {
    console.log(`Error: ${err}`)
  }
  console.log(`Yeah it works: ${str}`)
}
```
