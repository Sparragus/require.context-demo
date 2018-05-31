// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import AboutContainer from '../AboutContainer'

describe('AboutContainer', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<AboutContainer {...props} />)
  }

  it('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree()
      expect(tree).toMatchSnapshot()
    })
  })
})
