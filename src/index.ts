import { addMatchers } from 'add-matchers';
import { toContainTimes } from "./matchers/to-contain-times";
import { toHaveNone} from "./matchers/to-have-none";
import { toHaveNoneExactly } from "./matchers/to-have-none-exactly";
import { toBeFlattened } from "./matchers/to-be-flattened";
import { toBeReverted } from "./matchers/to-be-reverted";

// Register custom matchers for Jest and Jasmine
addMatchers({
    toBeFlattened,
    toBeReverted,
    toContainTimes,
    toHaveNone,
    toHaveNoneExactly
});

export default matchersByName;
