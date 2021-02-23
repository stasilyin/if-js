const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (objectOne, objectTwo) => {
  const isParametrsObject = typeof objectOne !== 'object' || typeof objectTwo !== 'object';
  const isParametrsUndefined = objectOne === undefined || objectTwo === undefined;
  const isParametrsNull = objectOne === null || objectTwo === null;
  if (objectOne === objectTwo) return true;
  if (isParametrsUndefined) return false;
  if (isParametrsObject) return false;
  if (isParametrsNull) return false;
  const objectOneKeys = Object.keys(objectOne);
  const objectTwoKeys = Object.keys(objectTwo);
  if (objectOneKeys.length !== objectTwoKeys.length) return false;
  for (const key of objectOneKeys) {
    if (!objectTwoKeys.includes(key) || !deepEqual(objectOne[key], objectTwo[key])) return false;
  }
  return true;
};
  test('Entering valid values', () => {
    expect(deepEqual(obj1,obj3)).toBe(false);
    expect(deepEqual(obj1,obj2)).toBe(true);
  });

  test('Entering not valid values', () => {
    expect(deepEqual(null,obj3)).toBe(false);
    expect(deepEqual(undefined,obj2)).toBe(false);
    expect(deepEqual('undefined',obj2)).toBe(false);
    expect(deepEqual('undefined','test')).toBe(false);
    expect(deepEqual(4, NaN)).toBe(false);
    expect(deepEqual([''])).toBe(false);
    expect(deepEqual(null, NaN)).toBe(false);
  });