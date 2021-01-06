# Using variables to shortcircuit loops

### Here I used the variable dontPush to trigger the end of my outer FOR loop early.

```javascript
for (let i = 0; i < source.length; i++) {
  for (let j = 0; j < itemsToRemove.length; j++) {
    if (source[i] === itemsToRemove[j]) {
      dontPush = true;
      j = itemsToRemove.length;
    } else dontPush = false;
  }
  if (dontPush === false) arrayWithout.push(source[i]);
}
```

### This made it possible to loop through the source items without pushing three elements at a time.
