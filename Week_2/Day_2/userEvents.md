# USER EVENTS IN NODE

### Node can handle user events such as key presses

#### `stdin.on` is an input event

#### `stdout.[something]` is an output event

## Example

```javascript
const stdin = process.stdin;
stdin.on("data", (key) => {
  process.stdout.write(".");
});

console.log("after callback");
```

Would get the terminal to write a period for every key stroke.

```javascript
// \u0003 maps to ctrl+c input
if (key === "\u0003") {
  process.exit();
}
```

Would exit the process if Ctrl+C is pressed.
