// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import ProjectContainer from '../ProjectContainer'

describe('ProjectContainer', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<ProjectContainer {...props} />)
  }

  it('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree()
      expect(tree).toMatchSnapshot()
    })
  })
})
