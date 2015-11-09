'use strict'

import TestUtils from 'react-addons-test-utils'

export function render (jsx) {
  var renderer = TestUtils.createRenderer()
  renderer.render(jsx)
  return renderer.getRenderOutput()
}

