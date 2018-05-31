// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Projects from '../Projects'

describe('Projects', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<Projects {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
