import { addMatchers } from 'add-matchers';
import { toContainTimes } from "./matchers/to-contain-times";
import { toHaveNone} from "./matchers/to-have-none";
import { toHaveNoneExactly } from "./matchers/to-have-none-exactly";
import { toBeFlattened } from "./matchers/to-be-flattened";
import { toHaveSome } from "./matchers/to-have-some";
import { toHaveSomeExactly } from "./matchers/to-have-some-exactly";

// Register custom matchers for Jest and Jasmine
addMatchers({
    toBeFlattened,
    toContainTimes,
    toHaveNone,
    toHaveNoneExactly,
    toHaveSome,
    toHaveSomeExactly
});

export default matchersByName;
