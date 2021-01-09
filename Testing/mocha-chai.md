# TESTING VIA MOCHA WITH CHAI

## Testing In Node.js

#### 
* For Node, you don’t need the test runner file.
* To include Chai, add `const chai = require('chai')`; at the top of the test file.
* Make a directory called `test` in your project's root directory.
* Each test file will be `test/someModuleTest.js`.
* Run the tests using the `mocha` command, instead of opening a browser.

## Testing On A Browser
* Have a `testrunner.html` file to act with your browser.
* Comment out all `const chai = require('chai')` mentions in your code.
* Below `<!-- load your test files here --> ` Add the script `<script src="test/[moduleTest.js goes here]"></script>`

# Basic Testing Blocks

## `describe` block

#### Describe is used to group individual tests. The first parameter should indicate what we’re testing — in this case, since we’re going to test array functions, I’ve passed in the string 'Array'.

#### 
```javascript
describe('Array', function() {
  // Further code for tests goes here
});
```

## `it` blocks

#### Go inside of describe blocks and are used to create the actual tests

```javascript
describe('Array', function() {
  it('should start empty', function() {
    // Test code goes here
  });

  // More it blocks go here
});
```

## `assertion`

#### Asserts what a pass looks like and what a fail looks like.

```javascript
const assert = chai.assert;

describe('Array', function() {
  it('should start empty', function() {
    const arr = [];

    assert.equal(arr.length, 0);
  });
});
```

Expected length for the array here is zero. If it's not, it'll return false.







