import * as pincet from 'pincet';

export function toBeFlattened(values: unknown[]) {
    const flattened = pincet.flatten<unknown>(values);
    return pincet.isEqual(values, flattened)
}
