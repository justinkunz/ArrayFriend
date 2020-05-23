const methods = require("./methods");

class ArrayFriend extends Array {
  shuffle = methods.shuffle;
  removeDuplicates = methods.removeDuplicates;
  batch = methods.batch;
  copy = methods.copy;
  deepCopy = methods.deepCopy;
  random = methods.random;
  randomIndex = methods.randomIndex;
  countOf = methods.countOf;
  countIf = methods.countIf;
  onlyDuplicates = methods.onlyDuplicates;
  average = methods.average;
  partialMatch = methods.partialMatch;
  partialMatchIndex = methods.partialMatchIndex;
  last = methods.last;
}

const arrayFriend = (...arr) => new ArrayFriend(...arr);

arrayFriend.protos = () => {
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
  Array.prototype.last = methods.last;
  Array.prototype.copy = methods.copy;
  Array.prototype.random = methods.random;
  Array.prototype.randomIndex = methods.randomIndex;
};

module.exports = arrayFriend;
