# Array Friend

## Installation

`npm i arrayfriend`

## Usage

Import the wrapper from the module to use the extended methods without exposing the prototypes to standard arrays

```js
const $ = require("arrayfriend");

// Wrap array in wrapper
const choices = $(10, 20, 30, 40, 50);

// Access custom array methods
choices.shuffle(); // [30, 50, 10, 40, 20]
```

Optionally, invoke the `.protos()` method to expose all arrays to the extended methods.

```js
require("arrayfriend").proptos();

const choices = [10, 20, 30, 40, 50];

// Access custom array methods
choices.shuffle(); // [30, 50, 10, 40, 20]
```

## Methods

### Shuffle

`.shuffle()` will randomize the order of an array using the [Fisher–Yates shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

#### Example

```js
require("arrayfriend").proptos();

const unshuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = unshuffled.shuffle(); // Expected: array in randomized order, like [8,3,4,2,10,5,1,9,6,7]
```

### Remove Duplicates

`.removeDuplicates()` will remove duplicate items from an array

#### Example

```js
require("arrayfriend").proptos();

const users = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const uniqueUsers = users.removeDuplicates(); // Expected: ["Justin", "Jack", "Amanda", "Mary"]
```

### Batch

`.batch(limit)` will batch an array's elements into several nested arrays of a specified length.

#### Parameters

- `limit` _(Integer)_ - Length of batch

#### Example

```js
require("arrayfriend").proptos();

const unbatched = ["Justin", "Amanda", "Mary", "Kelly", "Jonathan", "Tom"];
const batched = unbatched.batch(2); // Expected: [["Justin", "Amanda"], [ "Mary", "Kelly"], ["Jonathan", "Tom"]]
```

### Copy

`.copy()` will create a [Shallow Copy](https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c) of an array

#### Example

```js
require("arrayfriend").proptos();

const words = ["foo", "bar", "baz"];
const wordsCopy = words.copy(); // Expected: ["foo", "bar", "baz"]
```

### Deep Copy

`.deepCopy()` will make a [Deep Copy](https://flaviocopes.com/how-to-clone-javascript-object/#deep-copy-vs-shallow-copy) of an array. This means objects or nested arrays will be replaced with replicated values, without referencing the original array. Changes can be made of the copied array without changing the original array.

#### Example

```js
require("arrayfriend").proptos();

const original = [
  { foo: "bar", foobar: ["foo", "bar"] },
  { bar: "foo", barfoo: ["bar", "foo"] },
  { foobar: ["foo", "bar"] },
  30,
  20,
  "Why does this array have so many types",
  Symbol(),
  "Oh yeah, to show you how to it can make a deep copy of any type",
];

const copied = original.deepCopy(); // Makes a deep copy

// Object reference comparison
copied[0].foo = "baz";

console.log(original[0].foo === copied[0].foo); // Expected: false
```

### Random

`.random()` will return a random item in the array

#### Example

```js
require("arrayfriend").proptos();

const words = ["foo", "bar", "baz"];
words.random(); // Expected: ["bar"]
```

### Random Index

`.randomIndex()` returns a random index in the array

#### Example

```js
require("arrayfriend").proptos();

const words = ["foo", "bar", "baz"];
words.randomIndex(); // Expected: 2
```

### Count Of

`.countOf(val)` will return a count of all items in an array matching a specified value.

#### Parameters

- `val` _(any)_ - Value to match

#### Example

```js
require("arrayfriend").proptos();

const words = ["foo", "bar", "foo", "foo", "baz"];
const fooCount = words.countOf("foo"); // Expected: 3
```

### Count If

`.countIf(condition)` will return a count of all items in an array that when passed into a callback function, return true

#### Parameters

- `condition` _(Function)_ - Callback function. For checking condition, takes in 3 parameters
  - `item` - _(any)_ Item in the array
  - `index` - **Optional** _(Integer)_ - Current index in the array
  - `arr` - **Optional** _(Array)_ - Current array

#### Example

```js
require("arrayfriend").proptos();

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const over90 = grades.countIf((grade) => grade >= 90); // Expected: 6
```

### Only Duplicates

`.onlyDuplicates()` filters an array to include only items whose values appear more than once in the array.

### Example

```js
require("arrayfriend").proptos();

const logins = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const duplicateLogins = logins.onlyDuplicates(); // Expected: ["Justin", "Amanda"]
```

### Average

`.average()` returns the average for an array. _Note: This will return NaN if all items in an array are not numbers_

```js
require("arrayfriend").proptos();

const projectGrades = [90, 100, 80, 100, 100];
const averageGrage = projectGrades.average(); // Expected: 94
```

### Partial Match

`.partialMatch(obj)` finds the first item matching the key/value pairs of the object passed in.

#### Parameters

- `obj` _(Object)_ - Object containing key/value pairs of array item to find

#### Examples

```js
require("arrayfriend").proptos();

const users = [
  {
    firstName: "Jon",
    lastName: "Smith",
    email: "jon.smith@gmail.com",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "jdoe@ymail.com",
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    email: "elon@tesla.com",
  },
];

const person = users.partialMatch({ email: "jdoe@ymail.com" });
// Expected:
//  {
//    firstName: "Jane",
//    lastName: "Doe",
//    email: "jdoe@ymail.com",
//  },
```

### Partial Match Index

`.partialMatch(obj)` finds the first index matching the key/value pairs of the object passed in.

#### Parameters

- `obj` _(Object)_ - Object containing key/value pairs of array item to find

#### Examples

```js
require("arrayfriend").proptos();

const users = [
  {
    firstName: "Jon",
    lastName: "Smith",
    email: "jon.smith@gmail.com",
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "jdoe@ymail.com",
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    email: "elon@tesla.com",
  },
];

const person = users.partialMatchIndex({ email: "jdoe@ymail.com" }); // Expected: 1
```
