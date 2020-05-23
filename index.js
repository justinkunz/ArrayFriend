const methods = require("./methods");

class extendedArr {
  constructor(arr = []) {
    this.arr = arr;
  }

  shuffle() {
    return methods.shuffle.bind(this.arr)();
  }

  removeDuplicates() {
    return methods.removeDuplicates.bind(this.arr)();
  }

  batch(limit = this.arr.length) {
    return methods.batch.bind(this.arr)(limit);
  }

  deepCopy() {
    return methods.deepCopy.bind(this.arr)();
  }

  countOf(itm) {
    return methods.countOf.bind(this.arr)(itm);
  }

  countIf(condition) {
    return methods.countIf.bind(this.arr)(condition);
  }

  onlyDuplicates() {
    return methods.onlyDuplicates.bind(this.arr)();
  }

  average() {
    return methods.average.bind(this.arr)();
  }

  partialMatch() {
    return methods.partialMatch.bind(this.arr)();
  }

  partialMatchIndex() {
    return methods.partialMatchIndex.bind(this.arr)();
  }
}

const _array = (arr) => new extendedArr(arr);

_array.protos = () => {
  Array.prototype.shuffle = methods.shuffle;
  Array.prototype.removeDuplicates = methods.removeDuplicates;
  Array.prototype.batch = methods.batch;
  Array.prototype.deepCopy = methods.deepCopy;
  Array.prototype.countOf = methods.countOf;
  Array.prototype.countIf = methods.countIf;
  Array.prototype.onlyDuplicates = methods.onlyDuplicates;
  Array.prototype.average = methods.average;
  Array.prototype.partialMatch = methods.partialMatch;
  Array.prototype.partialMatchIndex = methods.partialMatchIndex;
};
module.exports = _array;
