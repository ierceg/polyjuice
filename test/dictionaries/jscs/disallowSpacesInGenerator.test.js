/**
 * @fileoverview Tests for `disallowSpacesInGenerator` (JSCS) translation
 * @author Breno Lima de Freitas <https://breno.io>
 * @copyright 2016 Breno Lima de Freitas. All rights reserved.
 * See LICENSE file in root directory for full license.
 */

'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var lib = require('../../../lib/dictionaries/jscs/disallowSpacesInGenerator.js')

var getFn = caller(lib)

describe('jscs#disallowSpacesInGenerator', function() {
  it('converts the rule correctly', function() {
    var fn = getFn()
    var fnBound = getFn([2, {
      before: true
    }])

    expect(fn({
      beforeStar: false,
      afterStar: true
    })).to.eql([2, {
      after: false
    }])

    expect(fnBound({
      beforeStar: true,
      afterStar: true
    })).to.eql([2, {
      after: false,
      before: false
    }])

    expect(fn({
      beforeStar: true,
      afterStar: false
    })).to.eql([2, {
      before: false
    }])

    expect(fn({
      beforeStar: false,
      afterStar: false
    })).to.eql([2, {}])
  })
})
