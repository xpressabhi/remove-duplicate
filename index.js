/*!
 * linear-array <https://github.com/xpressabhi/is_same>
 *
 * Copyright (c) 2020, Ivan Spoljaric.
 * Released under the MIT License.
 */

'use strict';

module.exports = function removeDuplicate(array) {
  if (Array.isArray(array)) {
    return [...new Set(array)]
  } else {
    throw new Error('Expected Array as input');
  }
};