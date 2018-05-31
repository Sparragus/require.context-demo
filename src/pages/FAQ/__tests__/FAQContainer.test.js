// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import FAQContainer from '../FAQContainer'

describe('FAQContainer', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<FAQContainer {...props} />)
  }

  it('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree()
      expect(tree).toMatchSnapshot()
    })
  })
})
