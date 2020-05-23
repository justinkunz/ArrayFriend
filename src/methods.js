const methods = {};

/**
 * Shuffle array order
 * [1,2,3,4].randomize() --> [3,1,4,2]
 */
methods.shuffle = function () {
  const arr = [...this];
  for (let i = 0; i < arr.length; i++) {
    const switchPosition = Math.floor(Math.random() * arr.length);
    const tmp = arr[switchPosition];
    arr[switchPosition] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};

/**
 * Remove duplicate values from array
 * [1,2,2,3,3,4].removeDuplicates() --> [1,2,3,4]
 */
methods.removeDuplicates = function () {
  return Array.from(new Set(this));
};

/**
 * Batch / Nest Arrays
 * [1,2,3,4,5,6].batch(3) --> [[1,2,3], [4,5,6]]
 */
methods.batch = function (limit = this.length) {
  const len = Math.ceil(this.length / limit);

  let start = 0;
  let end = 0;

  return Array.apply(null, Array(len)).map(() => {
    start = end;
    end = start + limit;
    return this.slice(start, end);
  });
};

/**
 * Creates shallow copy of array
 * [3,2,1].copy() --> [3,2,1]
 */
methods.copy = function () {
  return [...this];
};

/**
 * Creates a deep copy of an array
 */
methods.deepCopy = function () {
  return [...this].map((a) => createCopy(a));

  function createCopy(itm) {
    switch (typeof itm) {
      case "object":
        return handleObject(itm);
      case "symbol":
        return Symbol();
      default:
        return itm;
    }
  }
  function handleObject(obj) {
    if (Array.isArray(obj)) return obj.deepCopy();

    const copiedObj = {};
    for (key in obj) {
      copiedObj[key] = createCopy(obj[key]);
    }

    return copiedObj;
  }
};

/**
 * Find number of occurances in array
 * ["foo", "bar", "foo"].countOf("foo") --> 2
 */
methods.countOf = function (itm) {
  return this.filter((e) => e === itm).length;
};

/**
 * Find count on callback condition
 * [1,2,3,4,5,6].countIf(num => num % 2 === 0) --> 4
 */
methods.countIf = function (condition) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (condition(this[i], i, this)) count++;
  }
  return count;
};

/**
 * Find only duplicate values
 * [1,2,2,3,3,4].onlyDuplicates() --> [2,3]
 */
methods.onlyDuplicates = function () {
  return this.filter((ele, i) => this.indexOf(ele) !== i);
};

/**
 * Finds last item in array
 * ["foo", "bar","baz"].last() --> "baz"
 */
methods.last = function () {
  return this[this.length - 1];
};

/**
 * Finds a random item in the array
 * ["foo", "bar","baz"].random() --> "bar"
 */
methods.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

/**
 * Finds a random index in the array
 * ["foo", "bar","baz"].randomIndex() --> 2
 */
methods.randomIndex = function () {
  return Math.floor(Math.random() * this.length);
};

/**
 * Find averages for array
 * [1,2,3,3,1].average() --> 2
 */
methods.average = function () {
  if (this.length === 0) return 0;
  return this.reduce((a, c) => a + c) / this.length;
};

/**
 * Takes in an object, finds first item matching object keys
 * [{a: 'foo', b: 'bar'},{a: 'zoo', b: 'zab'}].partialMatch({ a: 'foo' }) --> {a: 'foo', b: 'bar'}
 */
methods.partialMatch = function (obj = {}) {
  return this.find((x) => Object.keys(obj).every((k) => x[k] === obj[k]));
};

/**
 * Same as partialMatch, but returns index
 * [{a: 'foo', b: 'bar'},{a: 'zoo', b: 'zab'}].partialMatch({ a: 'foo' }) --> 0
 */
methods.partialMatchIndex = function (obj = {}) {
  return this.findIndex((x) => Object.keys(obj).every((k) => x[k] === obj[k]));
};

module.exports = methods;
