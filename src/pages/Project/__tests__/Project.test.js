// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Project from '../Project'

describe('Project', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<Project {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
