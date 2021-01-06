import { toHaveNoneExactly } from "../matchers/to-have-none-exactly";

test('it should return true when array is empty', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveNoneExactly([], array);
    expect(result).toBe(true);
});

test('it should return true when array does not contain the value', () => {
    const array = ['aap', 'noot'];
    const result = toHaveNoneExactly(['mies'], array);
    expect(result).toBe(true);
});

test('it should return true when array does not contain the exact value', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveNoneExactly(['MIES'], array);
    expect(result).toBe(true);
});

test('it should return false when array does contain the value', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveNoneExactly(['mies'], array);
    expect(result).toBe(false);
});

test('it should return false when array does contain the value as nested item', () => {
    const array = ['aap', 'noot', ['mies']];
    const result = toHaveNoneExactly(['mies'], array);
    expect(result).toBe(false);
});

test('it should return false when array does contain the boolean value', () => {
    const array = [false, true];
    const result = toHaveNoneExactly([true], array);
    expect(result).toBe(false);
});

test('it should return true when array does not contain the boolean value', () => {
    const array = [false];
    const result = toHaveNoneExactly([true], array);
    expect(result).toBe(true);
});

test('it should return false when array does contain the number value', () => {
    const array = [0, 1];
    const result = toHaveNoneExactly([1], array);
    expect(result).toBe(false);
});

test('it should return true when array does not contain the number value', () => {
    const array = [0, 1];
    const result = toHaveNoneExactly([2], array);
    expect(result).toBe(true);
});
