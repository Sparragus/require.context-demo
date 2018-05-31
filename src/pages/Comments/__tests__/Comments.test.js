// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Comments from '../Comments'

describe('Comments', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<Comments {...props} />)
  }

  it('matches the snapshot', () => {
    tree = buildTree()
    expect(tree).toMatchSnapshot()
  })
})
