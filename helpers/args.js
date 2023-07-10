const getArgs = (args) => {
  const res = {};
  const [_1, _2, ...rest] = args;
  rest.forEach((item, index, array) => {
    if (item.charAt(0) !== '-') {
      return;
    }
    const key = item.substring(1);
    if (index === array.length - 1) {
      res[key] = true;
      return;
    }
    if (array[index + 1].charAt(0) !== '-') {
      res[key] = array[index + 1];
      return;
    }
    res[key] = true;
  });
  return res;
};

export { getArgs };
