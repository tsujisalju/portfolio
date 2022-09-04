// Both key and value are message ID
exports.format = (msgs) => {
  return Object.keys(msgs).reduce((obj, id) => {
    obj[id] = id;
    return obj;
  }, {});
};
