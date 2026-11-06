import * as api from '@lp-labs/combinatorics-count';
import { choose } from '@lp-labs/combinatorics-count';
console.log(choose(52, 5));
// @ts-expect-error invalid argument must be rejected by declarations
api.choose(52, 'five');
