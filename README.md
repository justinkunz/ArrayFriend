# Custom Array Methods

Just some useful custom array methods added to the array prototype. Please submit any other useful array methods you create.

## Methods

### Shuffle

`.shuffle()` will randomize the order of an array using the [Fisher–Yates shuffle Algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

#### Example

```
const unshuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = unshuffled.shuffle(); // Expected: array in randomized order, like [8,3,4,2,10,5,1,9,6,7]
```

### Remove Duplicates

`.removeDuplicates()` will remove duplicate items from an array

#### Example

```
const users = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const uniqueUsers = users.removeDuplicates(); // Expected: ["Justin", "Jack", "Amanda", "Mary"]
```

### Batch

`.batch(limit)` will batch an array's elements into several nested arrays of a specified length.

#### Parameters

- `limit` _(Integer)_ - Length of batch

#### Example

```
const unbatched = ["Justin", "Amanda", "Mary", "Kelly", "Jonathan", "Tom"];
const batched = unbatched.batch(2); // Expected: [["Justin", "Amanda"], [ "Mary", "Kelly"], ["Jonathan", "Tom"]]
```

### Deep Copy

`.deepCopy()` will make a [Deep Copy](https://flaviocopes.com/how-to-clone-javascript-object/#deep-copy-vs-shallow-copy) of an array. This means objects or nested arrays will be replaced with replicated values, without referencing the original array. Changes can be made of the copied array without changing the original array.

#### Example

```
const original = [
  { foo: "bar", foobar: ["foo", "bar"] },
  { bar: "foo", barfoo: ["bar", "foo"] },
  { foobar: ["foo", "bar"] },
  30,
  20,
  "Why does this array have so many types",
  Symbol(),
  "Oh yeah, to show you how to it can make a deep copy of any type"
];

const copied = original.deepCopy(); // Makes a deep copy

// Object reference comparison
copied[0].foo = "baz";

console.log(original[0].foo === copied[0].foo) // Expected: false
```

### Count Of

`.countOf(val)` will return a count of all items in an array matching a specified value.

#### Parameters

- `val` _(any)_ - Value to match

#### Example

```
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

```
const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const over90 = grades.countIf((grade) => grade >= 90); // Expected: 6
```

### Only Duplicates

`.onlyDuplicates()` filters an array to include only items whose values appear more than once in the array.

### Example

```
const logins = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const duplicateLogins = logins.onlyDuplicates(); // Expected: ["Justin", "Amanda"]
```

### Average

`.average()` returns the average for an array. \_Note: This will return NaN if all items in an array are not numbers

```
const projectGrades = [90, 100, 80, 100, 100];
const averageGrage = projectGrades.average(); // Expected: 94
```
