import { addMatchers } from 'add-matchers';

import * as matchersByName from './matchers-by-name';

// Register custom matchers for Jest and Jasmine
addMatchers(matchersByName);

export default matchersByName;
