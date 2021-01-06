# Array matchers: for precise array matching only

*WARNING! This is alpha software. Still under active development.*

## What it does
Some custom array matchers for the Jest and Jasmine test runners. Fully tested.

## Install
`npm i array-matchers`

## Supported methods
- `toContainTimes(values: unknown[], times: number)`
- `toContainNone(values: unknown[])`
- `toContainNoneExactly(values: unknown[])`
- `toContainSome(values: unknown[])`
- `toContainSomeExactly(values: unknown[])`
- `toBeFlattened()`

##### toContainTimes
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainTimes(['aap'], 1); // true
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainTimes(['aap'], 0); // false
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainTimes(['aap'], 2); // false
```

##### toContainNone
```
import "array-matchers";

const array = ['aap', 'noot'];
expect(array).toContainNone(['mies']); // true
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainNone(['mies']); // false
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainNone(['MIES']); // false
```

##### toContainNoneExactly
```
import "array-matchers";

const array = ['aap', 'noot'];
expect(array).toContainNoneExactly(['mies']); // true
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainNoneExactly(['mies']); // false
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainNoneExactly(['MIES']); // true
```

##### toContainSome
```
import "array-matchers";

const array = ['aap', 'noot'];
expect(array).toContainSome(['mies']); // false
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainSome(['mies']); // true
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainSome(['MIES']); // true
```

##### toContainSomeExactly
```
import "array-matchers";

const array = ['aap', 'noot'];
expect(array).toContainSomeExactly(['mies']); // false
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainSomeExactly(['mies']); // true
```
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toContainSomeExactly(['MIES']); // false
```

##### toBeFlattened
```
import "array-matchers";

const array = ['aap', 'noot', 'mies'];
expect(array).toBeFlattened(); // true
```
```
import "array-matchers";

const array = ['aap', 'noot', ['mies']];
expect(array).toBeFlattened(); // false
```


