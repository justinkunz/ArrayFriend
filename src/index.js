const methods = require("./methods");

class ArrayFriend extends Array {}

ArrayFriend.prototype.shuffle = methods.shuffle;
ArrayFriend.prototype.removeDuplicates = methods.removeDuplicates;
ArrayFriend.prototype.batch = methods.batch;
ArrayFriend.prototype.copy = methods.copy;
ArrayFriend.prototype.deepCopy = methods.deepCopy;
ArrayFriend.prototype.random = methods.random;
ArrayFriend.prototype.randomIndex = methods.randomIndex;
ArrayFriend.prototype.countOf = methods.countOf;
ArrayFriend.prototype.countIf = methods.countIf;
ArrayFriend.prototype.onlyDuplicates = methods.onlyDuplicates;
ArrayFriend.prototype.average = methods.average;
ArrayFriend.prototype.isEmpty = methods.isEmpty;
ArrayFriend.prototype.partialMatch = methods.partialMatch;
ArrayFriend.prototype.partialMatchIndex = methods.partialMatchIndex;
ArrayFriend.prototype.last = methods.last;
ArrayFriend.prototype.ascending = methods.ascending;
ArrayFriend.prototype.descending = methods.descending;
ArrayFriend.prototype.removeNullValues = methods.removeNullValues;

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
  Array.prototype.isEmpty = methods.isEmpty;
  Array.prototype.partialMatch = methods.partialMatch;
  Array.prototype.partialMatchIndex = methods.partialMatchIndex;
  Array.prototype.last = methods.last;
  Array.prototype.copy = methods.copy;
  Array.prototype.random = methods.random;
  Array.prototype.randomIndex = methods.randomIndex;
  Array.prototype.ascending = methods.ascending;
  Array.prototype.descending = methods.descending;
  Array.prototype.removeNullValues = methods.removeNullValues;
};

arrayFriend.withLength = (n = 0) =>
  new ArrayFriend(...Array.apply(null, Array(n)));

module.exports = arrayFriend;
