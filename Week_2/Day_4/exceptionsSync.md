# SYNCHRONOUS EXCEPTIONS

```javascript
const printName = (name) => {
  console.log("Name: ", name);
  // What happens if this function throws an error?
  throw new Error("Error with your name!");
};

// This is never executed!
console.log("Continuing execution!");

//and then the server crashes
```

## Enter the `try` tag

```javascript
const printName = (name) => {
  console.log("Name: ", name);
  // What happens if this function throws an error?
  throw new Error("Error with your name!");
};

// This handles the error and keeps the script going
try {
  print("Sponge Bob");
} catch (err) {
  console.log(err.message);
}
```
