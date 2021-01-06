import * as pincet from 'pincet';

export function toHaveNoneExactly(excludedItems: unknown[], allItems: unknown[]) {
    return !pincet.contains<unknown>(excludedItems, allItems)
}
