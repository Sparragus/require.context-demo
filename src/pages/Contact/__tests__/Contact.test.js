// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Contact from '../Contact'

describe('Contact', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<Contact {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
