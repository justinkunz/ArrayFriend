const methods = require("./methods");
class ArrayFriend extends Array {}

// ARRAYFRIEND PROTOS

const arrayFriend = (...arr) => new ArrayFriend(...arr);

arrayFriend.protos = () => {
  // ARRAY PROTOS
};

arrayFriend.withLength = (n = 0) => new ArrayFriend(...Array.apply(null, Array(n)));

module.exports = arrayFriend;
