# Array matchers: for precise array matching only

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
const array = ['aap', 'noot', 'mies'];
expect(array).toContainTimes(['aap'], 1); // true
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainTimes(['aap'], 0); // false
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainTimes(['aap'], 2); // false
```

##### toContainNone
```
const array = ['aap', 'noot'];
expect(array).toContainNone(['mies']); // true
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainNone(['mies']); // false
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainNone(['MIES']); // false
```

##### toContainNoneExactly
```
const array = ['aap', 'noot'];
expect(array).toContainNoneExactly(['mies']); // true
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainNoneExactly(['mies']); // false
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainNoneExactly(['MIES']); // true
```

##### toContainSome
```
const array = ['aap', 'noot'];
expect(array).toContainSome(['mies']); // false
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainSome(['mies']); // true
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainSome(['MIES']); // true
```

##### toContainSomeExactly
```
const array = ['aap', 'noot'];
expect(array).toContainSomeExactly(['mies']); // false
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainSomeExactly(['mies']); // true
```
```
const array = ['aap', 'noot', 'mies'];
expect(array).toContainSomeExactly(['MIES']); // false
```

##### toBeFlattened
```
const array = ['aap', 'noot', 'mies'];
expect(array).toBeFlattened(); // true
```
```
const array = ['aap', 'noot', ['mies']];
expect(array).toBeFlattened(); // false
```


