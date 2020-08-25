# Array Friend

A lightweight dependancy free module to enhance JavaScript's array functionality.

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

## Chaining

All ArrayFriend methods that return arrays will return a new instance of Arrayfriend, so standard JS Array methods, as well as ArrayFriend methods can be chained.

```js
require("arrayfriend").protos();

const grades = ["80", "60", "76", "100", "58", "96", "92", "62", "78", "84"];

const sortedPassingGrades = grades
  .toNum() // ARRAYFRIEND METHOD
  .filter((score) => score > 72) // STANDARD ARRAY METHOD
  .descending(); // ARRAYFRIEND METHOD

console.log(sortedPassingGrades); // Expected: [100, 96, 92, 84, 80, 78, 76]
```

## ArrayFriend Methods

##### Useful Methods

- [Shuffle](#shuffle)
- [Batch](#batch)
- [Insert At](#insert-at)
- [Replace](#replace)
- [Is Empty](#is-empty)
- [Last](#last)

##### Duplicate Management

- [Remove Duplicates](#remove-duplicates)
- [Only Duplicates](#only-duplicates)

##### Copies

- [Copy](#copy)
- [Deep Copy](#deep-copy)

##### Random

- [Random](#random)
- [Random Index](#random-index)

##### Counts

- [Count Of](#count-of)
- [Count If](#count-if)

##### Sorting

- [Ascending](#ascending)
- [Descending](#descending)

##### Querying

- [Partial Match](#partial-match)
- [Partial Match Index](#partial-match-index)

##### Math

- [Sum](#sum)
- [Difference](#difference)
- [Product](#product)
- [Quotient](#quotient)
- [Mean](#mean)
- [Average](#average)
- [Median](#median)
- [Mode](#mode)

##### Type Management

- [Filter Type](#filter-type)
- [Types](#types)
- [To Str](#to-str)
- [To Num](#to-num)

##### Filtering

- [Even Indexes](#even-indexes)
- [Odd Indexes](#odd-indexes)
- [Remove Null Values](#remove-null-values)
- [Remove Falsy Values](#remove-falsy-values)

##### Comparing

- [Assert](#assert)

##### Conversion

- [To Object](#to-object)

### Shuffle

`.shuffle()` will randomize the order of an array using the [Fisher–Yates shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const unshuffled = $(...options); // Use the spread operator to pass in an existing array
const shuffled = unshuffled.shuffle(); // Expected: array in randomized order, like [8,3,4,2,10,5,1,9,6,7]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const unshuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = unshuffled.shuffle(); // Expected: array in randomized order, like [8,3,4,2,10,5,1,9,6,7]
```

### Remove Duplicates

`.removeDuplicates()` will remove duplicate items from an array

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const users = $("Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"); // Pass values directly into the wrapper
const uniqueUsers = users.removeDuplicates(); // Expected: ["Justin", "Jack", "Amanda", "Mary"]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const users = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const uniqueUsers = users.removeDuplicates(); // Expected: ["Justin", "Jack", "Amanda", "Mary"]
```

### Only Duplicates

`.onlyDuplicates()` filters an array to include only items whose values appear more than once in the array.

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const logins = $("Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda");
const duplicateLogins = logins.onlyDuplicates(); // Expected: ["Justin", "Amanda"]
```

###### Extending Prototype

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

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const unbatched = ["Justin", "Amanda", "Mary", "Kelly", "Jonathan", "Tom"];
const batched = $(...unbatched).batch(2); // Expected: [["Justin", "Amanda"], [ "Mary", "Kelly"], ["Jonathan", "Tom"]]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const unbatched = ["Justin", "Amanda", "Mary", "Kelly", "Jonathan", "Tom"];
const batched = unbatched.batch(2); // Expected: [["Justin", "Amanda"], [ "Mary", "Kelly"], ["Jonathan", "Tom"]]
```

### Copy

`.copy()` will create a [Shallow Copy](https://we-are.bookmyshow.com/understanding-deep-and-shallow-copy-in-javascript-13438bad941c) of an array

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const words = $("foo", "bar", "baz");
const wordsCopy = words.copy(); // Expected: ["foo", "bar", "baz"]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const words = ["foo", "bar", "baz"];
const wordsCopy = words.copy(); // Expected: ["foo", "bar", "baz"]
```

### Deep Copy

`.deepCopy()` will make a [Deep Copy](https://flaviocopes.com/how-to-clone-javascript-object/#deep-copy-vs-shallow-copy) of an array. This means objects or nested arrays will be replaced with replicated values, without referencing the original array. Changes can be made of the copied array without changing the original array.

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const original = $(
  { foo: "bar", foobar: ["foo", "bar"] },
  { bar: "foo", barfoo: ["bar", "foo"] },
  { foobar: ["foo", "bar"] },
  30,
  20,
  "Why does this array have so many types",
  Symbol(),
  "Oh yeah, to show you how to it can make a deep copy of any type"
);

const copied = original.deepCopy(); // Makes a deep copy

// Object reference comparison
copied[0].foo = "baz";

console.log(original[0].foo === copied[0].foo); // Expected: false
```

###### Extending Prototype

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

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const words = $("foo", "bar", "baz");
words.random(); // Expected Example: "bar"
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const words = ["foo", "bar", "baz"];
words.random(); // Expected Example: "bar"
```

### Random Index

`.randomIndex()` returns a random index in the array

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const words = $("foo", "bar", "baz");
words.randomIndex(); // Expected Example: 2
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const words = ["foo", "bar", "baz"];
words.randomIndex(); // Expected Example: 2
```

### Count Of

`.countOf(val)` will return a count of all items in an array matching a specified value.

##### Parameters

- `val` _(any)_ - Value to match

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const words = $("foo", "bar", "foo", "foo", "baz");
const fooCount = words.countOf("foo"); // Expected: 3
```

###### Extending Prototype

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

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const grades = $(99, 93, 60, 70, 100, 80, 78, 100, 98, 94);
const over90 = grades.countIf((grade) => grade >= 90); // Expected: 6
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const over90 = grades.countIf((grade) => grade >= 90); // Expected: 6
```

### Last

`.last()` returns the last item in the array

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const users = $("Jack", "Jill", "Bob", "Joe");
const lastUser = users.last(); // Expected: Joe
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const users = ["Jack", "Jill", "Bob", "Joe"];
const lastUser = users.last(); // Expected: Joe
```

### Ascending

`.ascending()` sorts the array in ascending order

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const grades = $(99, 93, 60, 70, 100, 80, 78, 100, 98, 94);
const worstToBest = grades.ascending(); // Expected: [60, 70, 78, 80, 93,94, 98, 99, 100, 100]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const worstToBest = grades.ascending(); // Expected: [60, 70, 78, 80, 93,94, 98, 99, 100, 100]
```

### Descending

`.descending()` sorts the array in descending order

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const grades = $(99, 93, 60, 70, 100, 80, 78, 100, 98, 94);
const bestToWorst = grades.descending(); // Expected: [100, 100, 99, 98, 94, 93, 80, 78, 70, 60]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const bestToWorst = grades.descending(); // Expected: [100, 100, 99, 98, 94, 93, 80, 78, 70, 60]
```

### Is Empty

`.isEmpty()` is a simple method that returns true if the specified array's length is 0.

##### Example

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr1 = $();
const arr2 = $("foo", "bar", "baz");

console.log(arr1.isEmpty()); // Expected: true
console.log(arr2.isEmpty()); // Expected: false

arr1.push("foobar");

console.log(arr1.isEmpty()); // Expected: false
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const arr1 = [];
const arr2 = ["foo", "bar", "baz"];

console.log(arr1.isEmpty()); // Expected: true
console.log(arr2.isEmpty()); // Expected: false
```

### Partial Match

`.partialMatch(obj)` finds the first item matching the key/value pairs of the object passed in.

##### Parameters

- `obj` _(Object)_ - Object containing key/value pairs of array item to find

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const users = $(
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
  }
);

const person = users.partialMatch({ email: "jdoe@ymail.com" });
// Expected:
//  {
//    firstName: "Jane",
//    lastName: "Doe",
//    email: "jdoe@ymail.com",
//  },
```

###### Extending Prototype

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

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const users = $(
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
  }
);

const person = users.partialMatchIndex({ email: "jdoe@ymail.com" }); // Expected: 1
```

###### Extending Prototype

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

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr1 = [3, 4, "foo", "bar", null, "baz", false, "foobar", NaN, undefined, ""];

const cleaned = $(...arr1).removeNullValues(); // Expected: [ 3, 4, 'foo', 'bar', 'baz', false, 'foobar', NaN ]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const arr1 = [3, 4, "foo", "bar", null, "baz", false, "foobar", NaN, undefined, ""];

const cleaned = arr1.removeNullValues(); // Expected: [ 3, 4, 'foo', 'bar', 'baz', false, 'foobar', NaN ]
```

### Remove Falsy Values

`.removeFalsyValues()` will remove any falsy values from the array

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr1 = [3, 4, "foo", "bar", null, "baz", false, "foobar", NaN, undefined, ""];

const cleaned = $(...arr1).removeFalsyValues(); // Expected: [ 3, 4, 'foo', 'bar', 'baz', 'foobar']
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const arr1 = [3, 4, "foo", "bar", null, "baz", false, "foobar", NaN, undefined, ""];

const cleaned = arr1.removeFalsyValues(); // Expected: [ 3, 4, 'foo', 'bar', 'baz', 'foobar']
```

### Insert At

`.insertAt()` inserts item(s) after a specified index in array.

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const users = $("Jon", "Jack", "Jill");
users.insertAt(1, "Justin", "Joe"); // Expected: ['Jon', 'Jack', 'Justin', 'Joe', 'Jill']
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const users = ["Jon", "Jack", "Jill"];
users.insertAt(1, "Justin", "Joe"); // Expected: ['Jon', 'Jack', 'Justin', 'Joe', 'Jill']
```

### Sum

`.sum()` returns the sum of all items in a numerical array.

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const nums = $(10, 20, 30);
nums.sum(); // Expected: 60
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const nums = [10, 20, 30];
nums.sum(); // Expected: 60
```

### Difference

`.difference()` returns the difference of all items in a numerical array.

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const nums = $(10, 20, 30);
nums.difference(); // Expected: -40
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const nums = [10, 20, 30];
nums.difference(); // Expected: -40
```

### Product

`.product()` returns the product of all items in a numerical array.

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const nums = $(10, 20, 30);
nums.product(); // Expected: 6000
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const nums = [10, 20, 30];
nums.product(); // Expected: 6000
```

### Quotient

`.quotient()` returns the quotient of all items in a numerical array.

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const nums = $(10, 20, 30);
nums.quotient(); // Expected: 0.016666666666666666
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const nums = [10, 20, 30];
nums.quotient(); // Expected: 0.016666666666666666
```

### Mean

`.mean()` returns the average for an array. _Note: This will return NaN if all items in an array are not numbers_

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const projectGrades = $(90, 100, 80, 100, 100);
const averageGrage = projectGrades.average(); // Expected: 94
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const projectGrades = [90, 100, 80, 100, 100];
const averageGrage = projectGrades.average(); // Expected: 94
```

### Average

`.average()` is an alternate term for `.mean()`

### Median

`.median()` returns the median of all items in the array

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const nums = $(10, 20, 30, 50, 100);
nums.median(); // Expected: 30
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const nums = [10, 20, 30, 50, 100];
nums.median(); // Expected: 30
```

### Mode

`.mode()` returns the mode of the array

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const nums = $(10, 20, 30, 50, 100);
nums.mode(); // Expected: 20
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const nums = [10, 20, 20, 30, 50, 100];
nums.mode(); // Expected: 20
```

### Replace

`.replace()` replaces all occurances of a specified value with a new value.

##### Parameters

- `oldVal` _(Any)_ - Value to replace
- `newVal` _(Any)_ - Replacement value

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr = $("foo", "bar", "foobar", "bar", "foo");
const noFoo = arr.replace("foo", "baz"); // Expected: ["baz", "bar", "foobar", "bar", "baz"]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const arr = ["foo", "bar", "foobar", "bar", "foo"];
const noFoo = arr.replace("foo", "baz"); // Expected: ["baz", "bar", "foobar", "bar", "baz"]
```

### Filter Type

`.filterType()` filters an array to only a specified type

##### Parameters

- `type` _(String)_ - String representing JS type

**Possible Types**

- `"string"`
- `"number"`
- `"boolean"`
- `"undefined"`
- `"symbol"`
- `"function"`
- `"object"` - Returns all JS object types _(objects, arrays, functions, null)_
- `"array"` - Returns only nested arrays
- `"null"` - Returns only `null` values
- `"objectOnly"` - Returns only objects without returning arrays

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr = [1, 4, "t", ["nested", 8], { foo: "bar" }, { baz: false }, [1, 2, 3], true, ""];
const mixed = $(...arr); // Spread syntax can be used to convert an existing array

// Only strings
const strOnly = mixed.filterType("string"); // Expected: ["t", ""]

// Only arrays
const nestedArrsOnly = mixed.filterType("array"); // [["nested", 8], [1,2,3]]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const mixed = [1, 4, "t", ["nested", 8], { foo: "bar" }, { baz: false }, [1, 2, 3], true, ""];

// Only strings
const strOnly = mixed.filterType("string"); // Expected: ["t", ""]

// Only arrays
const nestedArrsOnly = mixed.filterType("array"); // [["nested", 8], [1,2,3]]
```

### Types

`.types()` returns an array of the target array's types.

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const mixed = $(1, 4, "t", true, "");
const types = mixed.types(); // Expected: ["number", "number", "string", "boolean", "string"]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const mixed = $(1, 4, "t", true, "");
const types = mixed.types(); // Expected: ["number", "number", "string", "boolean", "string"]
```

### To Str

`.toStr()` returns an array of a string version of all the items in the array. _Note: Conversion is different depending on type. For example, **objects** and **arrays** will be returned stringified._

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr = [1, 4, "t", ["nested", 8], { foo: "bar" }, { baz: false }, [1, 2, 3], true];
const mixed = $(...arr); // Spread syntax can be used to convert an existing array

const strArr = mixed.toStr(); // ['1','4','t','["nested",8]','{"foo":"bar"}','{"baz":false}','[1,2,3]','true']
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const mixed = [1, 4, "t", ["nested", 8], { foo: "bar" }, { baz: false }, [1, 2, 3], true];
const strArr = mixed.toStr(); // ['1','4','t','["nested",8]','{"foo":"bar"}','{"baz":false}','[1,2,3]','true']
```

### To Num

`.toNum()` returns a new array with all items converted to numbers.

##### Parameters

`base` - Base to parse numbers to. _(Defaults to 10)_

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr = ["1", 4, "3.2", "7", "19", 0];
$(...arr).toNum(); // Expected: [1, 4, 3.2, 7, 19, 0]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const arr = ["1", 4, "3.2", "7", "19", 0];
arr.toNum(); // Expected: [1, 4, 3.2, 7, 19, 0]
```

### Even Indexes

`.evenIndexes()` returns only the _even_ index items in an array

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr = ["foo", "bar", "baz", "foobar"];
$(...arr).evenIndexes(); // Expected: ["foo", "baz"]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const arr = ["foo", "bar", "baz", "foobar"];
arr.evenIndexes(); // Expected: ["foo", "baz"]
```

### Odd Indexes

`.oddIndexes()` returns only the _odd_ index items in an array

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const arr = ["foo", "bar", "baz", "foobar"];
$(...arr).oddIndexes(); // Expected: ["bar", "foobar"]
```

###### Extending Prototype

```js
require("arrayfriend").protos();

const arr = ["foo", "bar", "baz", "foobar"];
arr.oddIndexes(); // Expected: ["bar", "foobar"]
```

### Assert

`.assert()` does a deep compare on an array with any target array - Returning a boolean of if all values and nested values matched.

##### Examples

###### ArrayFriend Wrapper

```js
const $ = require("arrayfriend");

const a1 = [{ foo: "bar", bar: 4, baz: false }, [4, 3, 2, 1], "f", 0, true, "i"];
const a2 = [{ foo: "bar", bar: 4, baz: false }, [4, 3, 2, 1], "f", 0, true, "i"];

$(...a1).assert(a2); // Expected: true

const a3 = [{ foo: "baz", bar: 4, baz: false, t: 4 }, [4, 3, 2, 1], "j", 1, true, "i"];
const a4 = [{ foo: "bar", bar: 4, baz: false }, [4, 3, 2, 1], "f", 0, true, "i"];

$(...a3).assert(a4); // Expected: false
```

###### Extending Prototype

```js
const $ = require("arrayfriend").protos();

const a1 = [{ foo: "bar", bar: 4, baz: false }, [4, 3, 2, 1], "f", 0, true, "i"];
const a2 = [{ foo: "bar", bar: 4, baz: false }, [4, 3, 2, 1], "f", 0, true, "i"];

a1.assert(a2); // Expected: true

const a3 = [{ foo: "baz", bar: 4, baz: false, t: 4 }, [4, 3, 2, 1], "j", 1, true, "i"];
const a4 = [{ foo: "bar", bar: 4, baz: false }, [4, 3, 2, 1], "f", 0, true, "i"];

a3.assert(a4); // Expected: false
```

### To Object

`.toObject()` converts an array to an object, with specified keys and values for each item

##### Parameters

- `cb` - **OPTIONAL** - Callback function called for each item in the array. **Must return an object with a `key` key and a `value` key** _Note: Callback function is optional. It is not needed if every item in the array is an object with a `key` key and `value` key._
  **Callback Parameters**
  - Array item
  - Item Index
  - Array

##### Examples

###### ArrayFriend Wrapper

**Example 1: With Callback Function**

```js
const $ = require("arrayfriend");

const data = [
  { id: "abc123", score: 97 },
  { id: "def456", score: 82 },
  { id: "hij789", score: 90 },
  { id: "klm012", score: 78 },
];

// Expected: { abc123: 97, def456: 82, hij789: 90, klm012: 78 }
const scores = $(...data).toObject((item) => ({ key: item.id, value: item.score }));
```

**Example 2: Without Callback Function**

```js
const $ = require("arrayfriend");

// If array is already in [{ key, value }] format
// No callback function is required to convert to an object
const houseAttributes = [
  { key: "sqFt", value: 2000 },
  { key: "yearBuilt", value: 1998 },
  { key: "bedrooms", value: 4 },
  { key: "bathrooms", value: 2.5 },
];

// Expected: { sqFt: 2000, yearBuilt: 1998, bedrooms: 4, bathrooms: 2.5 }
const home = $(...houseAttributes).toObject();
```

###### Extending Prototype

**Example 1: With Callback Function**

```js
const $ = require("arrayfriend").protos();

const data = [
  { id: "abc123", score: 97 },
  { id: "def456", score: 82 },
  { id: "hij789", score: 90 },
  { id: "klm012", score: 78 },
];

// Expected: { abc123: 97, def456: 82, hij789: 90, klm012: 78 }
const scores = data.toObject((item) => ({ key: item.id, value: item.score }));
```

**Example 2: Without Callback Function**

```js
const $ = require("arrayfriend");

// If array is already in [{ key, value }] format
// No callback function is required to convert to an object
const houseAttributes = [
  { key: "sqFt", value: 2000 },
  { key: "yearBuilt", value: 1998 },
  { key: "bedrooms", value: 4 },
  { key: "bathrooms", value: 2.5 },
];

// Expected: { sqFt: 2000, yearBuilt: 1998, bedrooms: 4, bathrooms: 2.5 }
const home = houseAttributes.toObject();
```
