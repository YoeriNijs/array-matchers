import { toHaveSome } from "../matchers/to-have-some";

test('it should return false when array is empty', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveSome([], array);
    expect(result).toBe(false);
});

test('it should return false when array does not contain the value', () => {
    const array = ['aap', 'noot'];
    const result = toHaveSome(['mies'], array);
    expect(result).toBe(false);
});

test('it should return true when array does contain the value as uppercase', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveSome(['MIES'], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the string value', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toHaveSome(['mies'], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the string value as nested item', () => {
    const array = ['aap', 'noot', ['mies']];
    const result = toHaveSome(['mies'], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the boolean value', () => {
    const array = [true];
    const result = toHaveSome([true], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the boolean value as nested item', () => {
    const array = [false, [true]];
    const result = toHaveSome([true], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the number value', () => {
    const array = [0, 1, 2];
    const result = toHaveSome([2], array);
    expect(result).toBe(true);
});

test('it should return true when array does contain the number value as nested item', () => {
    const array = [0, 1, [2]];
    const result = toHaveSome([2], array);
    expect(result).toBe(true);
});
