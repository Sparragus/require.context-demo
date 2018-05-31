// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Home from '../Home'

describe('Home', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<Home {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
