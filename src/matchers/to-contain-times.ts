import * as pincet from 'pincet';

export type ToContainTimes<T> = (valueToCheck: T[], times: number, expectationFailOutput?: T[]) => boolean;

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toContainTimes: ToContainTimes<T>;
        }
    }
    namespace jest {
        interface Matchers<R> {
            toContainTimes: ToContainTimes<R>;
        }
    }
}


export const toContainTimes: ToContainTimes<unknown> = (shouldContain: any[], times: number, actual: any) => {
    const filter = (aValue: any) => aValue && shouldContain.includes(aValue);
    const found = pincet.findAny<any>(actual, filter);
    const unique = pincet.unique<any>(found);
    const counts: number[] = unique.map(u => found.filter(f => f === u).length);
    return counts.every(c => c === times);
};
