# SMALL TIPS FOR WEEK 1

## Use variables to shortcircuit loops

```javascript
for (let i = 0; i < array.length; i++) {
  if (shortcircuit === true) i = array.length;
}
```

## Sum Function

#### Convert the arguments into Numbers BEFORE passing them into a math function

## Debugging

#### Use the console.log() function ALL THE TIME to confirm what you think your program is doing.

## NaN is a Number

#### NaN !== Number is false. This is a quirkiness of Javascript.

You should check if x !== Number instead.
