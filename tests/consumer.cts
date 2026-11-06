import * as api from '@lp-labs/duration-iso-formatter';
import { formatIsoDuration } from '@lp-labs/duration-iso-formatter';
console.log(formatIsoDuration(90061));
// @ts-expect-error invalid argument must be rejected by declarations
api.formatIsoDuration('60');
