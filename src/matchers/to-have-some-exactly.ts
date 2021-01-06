import * as pincet from 'pincet';

export function toHaveSomeExactly(excludedItems: unknown[], allItems: unknown[]) {
    return pincet.contains<unknown>(excludedItems, allItems)
}
