// Run this file to view examples in console

require("./prototypes");

// ===============
// .shuffle() -- Randomize / Shuffle array order
// ===============

const unshuffled = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const shuffled = unshuffled.shuffle(); // array in randomized order. example: [8,3,4,2,10,5,1,9,6,7]

log("shuffle", unshuffled, shuffled);

// ===============
// .deepCopy() -- Make a deep copy of array (keep structure and value with no reference to original)
// ===============

const toCopy = [
  { foo: "bar", foobar: ["foo", "bar"] },
  { bar: "foo", barfoo: ["bar", "foo"] },
  { foobar: ["foo", "bar"] },
  30,
  20,
  "Why does this array have so many types",
  Symbol(),
  "Oh yeah, to show you how to it can make a deep copy of any type"
];

const copied = toCopy.deepCopy(); // Same structure, but objects in copied can be altered without altering toCopy's
log("deepCopy", toCopy, copied);

// ===============
// .removeDuplicates() -- Removes duplicates from array
// ===============

const users = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const uniqueUsers = users.removeDuplicates(); // ["Justin", "Jack", "Amanda", "Mary"]

log("removeDuplicates", users, uniqueUsers);

// ===============
// .batch() -- Batch arrays into nested arrays of a specified size
// ===============

const unbatched = ["Justin", "Amanda", "Mary", "Kelly", "Jonathan", "Tom"];
const batched = unbatched.batch(2); // [["Justin", "Amanda"], [ "Mary", "Kelly"] . . .]

log("batch", unbatched, batched);

// ===============
// .countOf() -- Count of specified value
// ===============

const words = ["foo", "bar", "foo", "foo", "baz"];
const fooCount = words.countOf("foo"); // 3

log("countOf", words, fooCount);

// ===============
// .countIf() -- Counts of array items where callback fn returns true
// ===============

const grades = [99, 93, 60, 70, 100, 80, 78, 100, 98, 94];
const over90 = grades.countIf(grade => grade >= 90); // 6

log("countIf", grades, over90);

// ===============
// .onlyDuplicates() -- Filters array to only duplicate values
// ===============
const logins = ["Justin", "Justin", "Jack", "Amanda", "Mary", "Amanda"];
const duplicateLogins = logins.onlyDuplicates(); // ["Justin", "Amanda"]

log("onlyDuplicates", logins, duplicateLogins);

// ===============
// .average() -- Finds average value for array
// ===============

const projectGrades = [90, 100, 80, 100, 100];
const averageGrage = projectGrades.average(); // 94

log("average", grades, averageGrage);

// ===============
// Helper fn to log results
// ===============
function log(method, original, result) {
  console.log(
    `.${method}() ==============\n\nOriginal:`,
    original,
    `\nResult:`,
    result,
    "\n"
  );
}
