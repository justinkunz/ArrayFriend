# Array Friend

A lightweight module to enhance JavaScript's array functionality.

```
npm i arrayfriend
```

## Creating a New Array

Import the wrapper from the module to use the extended methods without exposing the methods to standard arrays

```js
const $ = require("arrayfriend");

// Wrap array in wrapper
const choices = $(10, 20, 30, 40, 50);

// Access custom array methods
choices.shuffle(); // [30, 50, 10, 40, 20]
```

To create a new iterable ArrayFriend Array of a set length without specifying the values contained, use the `.withLength(n)` method of the ArrayFriend module.

```js
const $ = require("arrayfriend");

// Using .withLength() to create an iterable array with a length of 5
const arr = $.withLength(5); // Expected: [undefined, undefined, undefined, undefined, undefined]

// Able to access standard array methods
// Set each item in the array to a random value between 1 and 3
const randomValues = arr.map(() => Math.floor(Math.random() * 3) + 1);

console.log(randomValues); // Example: [ 3, 1, 2, 1, 2 ]

// Also able to access ArrayFriend methods
randomValues.countOf(1); // Expected: 2
```

## Extending Prototypes

Optionally, invoke the `.protos()` method to expose all arrays to the extended methods.

```js
require("arrayfriend").protos();

const choices = [10, 20, 30, 40, 50];

// Access custom array methods
choices.shuffle(); // [30, 50, 10, 40, 20]
```

## ArrayFriend Methods

NOTE: The examples for these methods utilize the `.protos()` functionality to expose the methods to all arrays, though this functionality can also be accomplished using the ArrayFriend wrapper.

### Shuffle

`.shuffle()` will randomize the order of an array using the [Fisher–Yates shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

###### Example

```js
require("arrayfriend").protos();

const unshuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = unshuffled.shuffle(); // Expected: array in randomized order, like [8,3,4,2,10,5,1,9,6,7]
```

### Remove Duplicates

`.removeDuplicates()` will remove duplicate items from an array

###### Example

```js
require("arrayfriend").protos();

const users = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const uniqueUsers = users.removeDuplicates(); // Expected: ["Justin", "Jack", "Amanda", "Mary"]
```

### Only Duplicates

`.onlyDuplicates()` filters an array to include only items whose values appear more than once in the array.

##### Example

```js
require("arrayfriend").protos();

const logins = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const duplicateLogins = logins.onlyDuplicates(); // Expected: ["Justin", "Amanda"]
```

### Batch

`.batch(limit)` will batch an array's elements into several nested arrays of a specified length.

##### Parameters

- `limit` _(Integer)_ - Length of batch

##### Example

```js
require("arrayfriend").protos();

const unbatched = ["Justin", "Amanda", "Mary", "Kelly", "Jonathan", "Tom"];
const batched = unbatched.batch(2); // Expected: [["Justin", "Amanda"], [ "Mary", "Kelly"], ["Jonathan", "Tom"]]
```

### Copy

`.copy()` will create a [Shallow Copy](https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c) of an array

##### Example

```js
require("arrayfriend").protos();

const words = ["foo", "bar", "baz"];
const wordsCopy = words.copy(); // Expected: ["foo", "bar", "baz"]
```

### Deep Copy

`.deepCopy()` will make a [Deep Copy](https://flaviocopes.com/how-to-clone-javascript-object/#deep-copy-vs-shallow-copy) of an array. This means objects or nested arrays will be replaced with replicated values, without referencing the original array. Changes can be made of the copied array without changing the original array.

##### Example

```js
require("arrayfriend").protos();

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

##### Example

```js
require("arrayfriend").protos();

const words = ["foo", "bar", "baz"];
words.random(); // Expected: ["bar"]
```

### Random Index

`.randomIndex()` returns a random index in the array

##### Example

```js
require("arrayfriend").protos();

const words = ["foo", "bar", "baz"];
words.randomIndex(); // Expected: 2
```

### Count Of

`.countOf(val)` will return a count of all items in an array matching a specified value.

##### Parameters

- `val` _(any)_ - Value to match

##### Example

```js
require("arrayfriend").protos();

const words = ["foo", "bar", "foo", "foo", "baz"];
const fooCount = words.countOf("foo"); // Expected: 3
```

### Count If

`.countIf(condition)` will return a count of all items in an array that when passed into a callback function, return true

##### Parameters

- `condition` _(Function)_ - Callback function. For checking condition, takes in 3 parameters
  - `item` - _(any)_ Item in the array
  - `index` - **Optional** _(Integer)_ - Current index in the array
  - `arr` - **Optional** _(Array)_ - Current array

##### Example

```js
require("arrayfriend").protos();

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const over90 = grades.countIf((grade) => grade >= 90); // Expected: 6
```

### Last

`.last()` returns the last item in the array

##### Example

```js
require("arrayfriend").protos();

const users = ["Jack", "Jill", "Bob", "Joe"];
const lastUser = users.last(); // Expected: Joe
```

### Ascending

`.ascending()` sorts the array in ascending order

##### Example

```js
require("arrayfriend").protos();

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const worstToBest = grades.ascending(); // Expected: [60, 70, 78, 80, 93,94, 98, 99, 100, 100]
```

### Descending

`.descending()` sorts the array in descending order

##### Example

```js
require("arrayfriend").protos();

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const bestToWorst = grades.descending(); // Expected: [100, 100, 99, 98, 94, 93, 80, 78, 70, 60]
```

### Is Empty

`.isEmpty()` is a simple method that returns true if the specified array's length is 0.

##### Example

```js
require("arrayfriend").protos();

const arr1 = [];
const arr2 = ["foo", "bar", "baz"];

console.log(arr1.isEmpty()); // Expected: true
console.log(arr2.isEmpty()); // Expected: false
```

### Average

`.average()` returns the average for an array. _Note: This will return NaN if all items in an array are not numbers_

```js
require("arrayfriend").protos();

const projectGrades = [90, 100, 80, 100, 100];
const averageGrage = projectGrades.average(); // Expected: 94
```

### Partial Match

`.partialMatch(obj)` finds the first item matching the key/value pairs of the object passed in.

##### Parameters

- `obj` _(Object)_ - Object containing key/value pairs of array item to find

##### Examples

```js
require("arrayfriend").protos();

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

##### Parameters

- `obj` _(Object)_ - Object containing key/value pairs of array item to find

##### Examples

```js
require("arrayfriend").protos();

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

### Remove Null Values

`.removeNullValues()` will remove any `null`, `undefined`, empty string values from the array. _Note: This does not remove any `false` or `NaN` values_

##### Example

```js
require("arrayfriend").protos();

const arr1 = [
  3,
  4,
  "foo",
  "bar",
  null,
  "baz",
  false,
  "foobar",
  NaN,
  undefined,
  "",
];

const cleaned = arr1.removeNullValues(); // Expected: [ 3, 4, 'foo', 'bar', 'baz', false, 'foobar', NaN ]
```
