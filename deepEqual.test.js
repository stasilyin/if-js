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
    a: 'a',
    b: {
      a: 'a',
      b: 'b',
      c: {
        a: 1,
      },
    },
  };
  
  const deepEqual = (object1, object2) => {
    const isParametrsObject = typeof object1 !== "object" || typeof object2 !== "object";
    const isParametrsUndefined = object1 === undefined || object2 === undefined;
    const isParametrsNull = object1 === null || object2 === null;
  
    if (isParametrsObject) {
      return false;
    }
    if (isParametrsUndefined) {
      return false;
    }
    if (isParametrsNull) {
      return false;
    }
  
    const object1Keys = Object.keys(object1);
    const object2Keys = Object.keys(object2);
  
    for (let i = 0; i < object1Keys.length; i++) {
      if (object2Keys.includes(object1Keys[i]) === false) {
        return false;
      }
    }
    for (let i = 0; i < object1Keys.length; i++) {
      if (typeof object1[object1Keys[i]] === "object") {
        return deepEqual(object1[object1Keys[i]], object2[object1Keys[i]]);
      }
      if (object1[object1Keys[i]] !== object2[object2Keys[i]]) {
        return false;
      }
    }
    return true;
  }

  test('Entering valid values', () => {
    expect(deepEqual(obj1,obj3)).toBe(true);
    expect(deepEqual(obj1,obj2)).toBe(false);
  });

  test('Entering not valid values', () => {
    expect(deepEqual(null,obj3)).toBe(false);
    expect(deepEqual(undefined,obj2)).toBe(false);
    expect(deepEqual('undefined',obj2)).toBe(false);
    expect(deepEqual('undefined','test')).toBe(false);
    expect(deepEqual(4, NaN)).toBe(false);
    expect(deepEqual()).toBe(false);
    expect(deepEqual([''])).toBe(false);
    expect(deepEqual(null, NaN)).toBe(false);
  });