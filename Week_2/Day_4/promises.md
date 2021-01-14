# PROMISES

### A `Promise` is an object that represents a future values

## Our `Promise Object` has 3 potential states

### <`Pending`>

#### Async operation still `ongoing`

### <`Fulfilled`>

#### Async operation `completed sucessful`

### <`Rejected`>

#### Async operation ended with an 'error'

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

# `CONSUMING` the promise

```javascript
promiseObj
  .then((result) => {
    // success case
    console.log(result))
  }

  .catch((error)) => {
    // fail case
    console.log(`Error: ${error}`)
  }
```
