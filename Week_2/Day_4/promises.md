# PROMISES

## A `Promise` is an object that represents a future value

## Our `Promise Object` has 3 potential states

### <`Pending`>

#### Async operation still `ongoing`

### <`Fulfilled`>

#### Async operation `completed sucessful`

### <`Rejected`>

#### Async operation ended with an 'error'

### Return new Promise

```javascript
const newPromiseFunction = function (inputString) {
  // Callback
  return new Promise((resolve, reject) => {
    const error = false;

    resolve(someValue);

    reject(someValue);
  });
};
```

```javascript
const ExecutorFct = (resolveFct, rejectFct) => {
  // If error is false, success
  // If error is true, failed
  const error = false;

  // callback
  setTimeout(() => {
    if (error) {
      // Rejected
      rejectFct("Failed!");
    } else {
      //Resolved
      resolveFct("Success!");
    }
  }, 3000);

  resolveFct(someValue); // Success => calling resolveFct and passing it data

  // OR

  rejectFct(someValue); //Failed => calling rejectFct and passing it the error
};

const promiseObj = new Promise(executorFct);
```

# `CONSUMING` the Promise

```javascript
promiseObj
  .then((result) => {
    // success case
    console.log(result))
  }

  .catch((error)) => {
    // fail case
    console.log(`Error catch: ${error}`)
  }
```
