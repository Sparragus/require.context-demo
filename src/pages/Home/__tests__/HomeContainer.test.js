// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import HomeContainer from '../HomeContainer'

describe('HomeContainer', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<HomeContainer {...props} />)
  }

  it('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree()
      expect(tree).toMatchSnapshot()
    })
  })
})
