function sumTwoValue(a) {
    return (b) =>  {
      
        if (isNaN(a) || isNaN(b) || !a || !b || Array.isArray(a) || Array.isArray(b)) {
            return 'You enter not a number'
        } else {
            return a+b;
        }
        
    }
}

    test('Sum should return sum of two values', () => {
        expect(sumTwoValue(1)(3)).toBe(4);
    })
    test('Sum should return value correctly comparing to other', () => {
        expect(sumTwoValue(2)(5)).toBeGreaterThan(6);
        expect(sumTwoValue(2)(5)).toBeGreaterThanOrEqual(7);
        expect(sumTwoValue(2)(5)).toBeLessThan(8);
        expect(sumTwoValue(2)(5)).toBeLessThanOrEqual(7);
    })
    test('Sum should return 2 float values correctly', () => {
        expect(sumTwoValue(0.1)(0.2)).toBeCloseTo(0.3);
    })
    test('Sum should return 2 not valid values correctly', () => {
        expect(sumTwoValue(0.1)(null)).toBe('You enter not a number');
        expect(sumTwoValue(0.1)('asd')).toBe('You enter not a number');
        expect(sumTwoValue(0.1)(undefined)).toBeDefined();
        expect(sumTwoValue(null)(undefined)).toBeTruthy();
        expect(sumTwoValue(null)('asd')).toBeTruthy();
        expect(sumTwoValue(1,4)(6,7,4)).toBeTruthy();
        expect(sumTwoValue(6,7,4)(undefined)).not.toBeUndefined();
        expect(sumTwoValue(0)(0)).toBeTruthy();
        expect(sumTwoValue()()).toBeTruthy();
        expect(sumTwoValue()(1)).toBeTruthy();
        expect(sumTwoValue(0.2)()).toBeTruthy();
        expect(sumTwoValue()('')).toBeTruthy();
        expect(sumTwoValue(null)('')).toBeTruthy();
        expect(sumTwoValue(NaN)(1)).toBeTruthy();
    })

