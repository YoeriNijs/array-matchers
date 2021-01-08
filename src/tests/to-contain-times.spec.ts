import { toContainTimes } from "../matchers/to-contain-times";

test('it should return true if the value is not found and times is zero', () => {
    const result = toContainTimes(['aap'], 0, []);
    expect(result).toBe(true);
});

test('it should return false if the value is not found and times is one', () => {
    const result = toContainTimes(['aap'], 1, []);
    expect(result).toBe(false);
});

test('it should return false if the value is found and times is zero', () => {
    const result = toContainTimes(['aap'], 0, ['aap', 'noot', 'mies']);
    expect(result).toBe(false);
});

test('it should return false if the value is found and times is two', () => {
    const result = toContainTimes(['aap'], 2, ['aap', 'noot', 'mies']);
    expect(result).toBe(false);
});

test('it should return true if the value is found and times is one', () => {
    const result = toContainTimes(['aap'], 1, ['aap', 'noot', 'mies']);
    expect(result).toBe(true);
});

test('it should return true if the value is found and times is one', () => {
    const result = toContainTimes(['aap'], 1, ['aap', 'noot', 'mies']);
    expect(result).toBe(true);
});

test('it should return true if the value is found in nested array and times is one', () => {
    const result = toContainTimes(['aap'], 1, [['aap'], 'noot', 'mies']);
    expect(result).toBe(true);
});

test('it should return true if the values are found and times is one', () => {
    const result = toContainTimes(['aap', 'noot'], 1, ['aap', 'noot', 'mies']);
    expect(result).toBe(true);
});

test('it should return false if one of the values is found twice and times is one', () => {
    const result = toContainTimes(['aap', 'noot'], 1, ['aap', 'noot', 'noot', 'mies']);
    expect(result).toBe(false);
});

test('it should return false if one of the values is found twice with nested array and times is one', () => {
    const result = toContainTimes(['aap', 'noot'], 1, ['aap', 'noot', ['noot'], 'mies']);
    expect(result).toBe(false);
});
