import * as pincet from 'pincet';

const convertToEqualValue = (value: unknown) => {
    if (typeof value === 'string') {
        return value.toLowerCase();
    } else {
        return value;
    }
}

export function toHaveNone(excludedItems: unknown[], allItems: unknown[]) {
    const excluded = excludedItems.map(convertToEqualValue);
    const all = allItems.map(convertToEqualValue);
    return !pincet.contains<unknown>(excluded, all)
}
