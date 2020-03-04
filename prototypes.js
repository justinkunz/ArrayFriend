/**
 * Shuffle array order
 * [1,2,3,4].randomize() --> [3,1,4,2]
 */
Array.prototype.shuffle = function() {
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
Array.prototype.removeDuplicates = function() {
  return Array.from(new Set(this));
};

/**
 * Batch / Nest Arrays
 * [1,2,3,4,5,6].batch(3) --> [[1,2,3], [4,5,6]]
 */
Array.prototype.batch = function(limit = this.length) {
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
 * Deep Copies strictly copy values, not
 */
Array.prototype.deepCopy = function() {
  const arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(createCopy(this[i]));
  }

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

  return arr;
};

/**
 * Find number of occurances in array
 * ["foo", "bar", "foo"].countOf("foo") --> 2
 */
Array.prototype.countOf = function(itm) {
  return this.filter(e => e === itm).length;
};

/**
 * Find count on callback condition
 * [1,2,3,4,5,6].countIf(num => num % 2 === 0) --> 4
 */
Array.prototype.countIf = function(condition) {
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
Array.prototype.onlyDuplicates = function() {
  return this.filter((ele, i) => this.indexOf(ele) !== i);
};

/**
 * Find averages for array
 * [1,2,3,3,1].average() --> 2
 */
Array.prototype.average = function() {
  if (this.length === 0) return 0;
  return this.reduce((a, c) => a + c) / this.length;
};
