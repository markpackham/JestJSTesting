const cloneArray = require("./cloneArray");

test("properly clones an array", () => {
  const array = [1, 2, 3];
  // don't use toBe for arrays, that's intended for memory addresses
  expect(cloneArray(array)).toEqual(array);
  // we've prove our array is a clone with a different memory address and not the same one
  expect(cloneArray(array)).not.toBe(array);
});
