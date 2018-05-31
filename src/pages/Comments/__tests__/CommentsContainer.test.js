// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import CommentsContainer from '../CommentsContainer'

describe('CommentsContainer', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<CommentsContainer {...props} />)
  }

  it('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree()
      expect(tree).toMatchSnapshot()
    })
  })
})
