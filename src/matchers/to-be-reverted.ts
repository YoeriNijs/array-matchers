import * as pincet from 'pincet';

export function toBeReverted(expected: unknown[], actual: unknown[]) {
    return pincet.isEqual<unknown>(expected, actual.reverse());
}
