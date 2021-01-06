import { toHaveSomeExactly } from "../matchers/to-have-some-exactly";

test('it should return false when array is empty', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveSomeExactly([], array);
    expect(result).toBe(false);
});

test('it should return false when array does not contain the value', () => {
    const array = ['aap', 'noot'];
    const result = toHaveSomeExactly(['mies'], array);
    expect(result).toBe(false);
});

test('it should return false when array does not contain the exact value', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveSomeExactly(['MIES'], array);
    expect(result).toBe(false);
});

test('it should return true when array does contain the value', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveSomeExactly(['mies'], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the value as nested item', () => {
    const array = ['aap', 'noot', ['mies']];
    const result = toHaveSomeExactly(['mies'], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the boolean value', () => {
    const array = [false, true];
    const result = toHaveSomeExactly([true], array);
    expect(result).toBe(true);
});

test('it should return false when array does not contain the boolean value', () => {
    const array = [false];
    const result = toHaveSomeExactly([true], array);
    expect(result).toBe(false);
});

test('it should return true when array does contain the number value', () => {
    const array = [0, 1];
    const result = toHaveSomeExactly([1], array);
    expect(result).toBe(true);
});

test('it should return false when array does not contain the number value', () => {
    const array = [0, 1];
    const result = toHaveSomeExactly([2], array);
    expect(result).toBe(false);
});
