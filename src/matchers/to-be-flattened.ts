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

export const toBeFlattened: ToBeFlattened<any> = (actual) => {
    const flattened = pincet.flatten<any>(actual);
    return pincet.isEqual(actual, flattened)
}
