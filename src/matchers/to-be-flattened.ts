import * as pincet from 'pincet';

export type ToBeFlattened<T> = (expectationFailOutput?: T) => boolean;

declare global {
    namespace jasmine {
        interface Matchers<T> {
            toBeFlattened: ToBeFlattened<T>;
        }
    }
    namespace jest {
        interface Matchers<R> {
            toBeFlattened: ToBeFlattened<R>;
        }
    }
}

export const toBeFlattened: ToBeFlattened<unknown> = <T>(actual: T): boolean => {
    if (!Array.isArray(actual)) {
        return false;
    }
    const flattened = pincet.flatten<T>(actual);
    return pincet.isEqual<T>(actual, flattened)
};
