import * as pincet from 'pincet';

export function toContainTimes(valueToCheck: unknown[], times: number, values: unknown[]) {
    const filter = (aValue: unknown) => aValue && valueToCheck.includes(aValue);
    const found = pincet.findAny<unknown>(values, filter);
    return found.length === times;
}
