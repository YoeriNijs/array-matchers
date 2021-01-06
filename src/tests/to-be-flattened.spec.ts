import { toBeFlattened } from "../matchers/to-be-flattened";

test('it should return true if the array is empty', () => {
   const result = toBeFlattened([]);
   expect(result).toBe(true);
});

test('it should return true if the array is flattened', () => {
    const array = ['aap', 'noot', 'mies'];
    const result = toBeFlattened(array);
    expect(result).toBe(true);
});

test('it should return false if the array is not flattened', () => {
    const array = ['aap', 'noot', ['mies']];
    const result = toBeFlattened(array);
    expect(result).toBe(false);
});
