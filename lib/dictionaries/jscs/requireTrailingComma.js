/**
* @fileoverview Translation for `requireTrailingComma` (JSCS) to ESLint
* @author Breno Lima de Freitas <https://breno.io>
* @copyright 2016 Breno Lima de Freitas. All rights reserved.
* See LICENSE file in root directory for full license.
*/

'use strict'

//------------------------------------------------------------------------------
// Rule Translation Definition
//------------------------------------------------------------------------------

module.exports = {
  name: 'comma-dangle',
  truthy: function(__current__, value) {
    return [2, (value === true ? 'always' : 'always-multiline')]
  }
};
