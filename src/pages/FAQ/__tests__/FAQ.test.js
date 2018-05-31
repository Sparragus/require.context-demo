// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import FAQ from '../FAQ'

describe('FAQ', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<FAQ {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
