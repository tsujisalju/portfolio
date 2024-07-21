exports.format = function (msgs) {
  const results = {};
  for (const [id] of Object.entries(msgs)) {
    results[id] = {
      string: id,
    };
  }
  return results;
};
