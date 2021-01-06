import {toBeReverted} from "../matchers/to-be-reverted";

test('it should return true if it is reverted', () => {
    const actual = ['aap', 'noot', 'mies'];
    const expected = ['mies', 'noot', 'aap'];
    const isReverted = toBeReverted(expected, actual);
    expect(isReverted).toBe(true);
});

test('it should return false if it is not reverted', () => {
    const actual = ['aap', 'noot', 'mies'];
    const expected = ['aap', 'noot', 'mies'];
    const isReverted = toBeReverted(expected, actual);
    expect(isReverted).toBe(false);
});
