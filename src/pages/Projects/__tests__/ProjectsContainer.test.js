// @flow
/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import ProjectsContainer from '../ProjectsContainer'

describe('ProjectsContainer', () => {
  let tree, props

  const buildTree = (newProps = {}) => {
    const defaultProps = {
    }

    props = Object.assign({}, defaultProps, newProps)

    return shallow(<ProjectsContainer {...props} />)
  }

  it('#render', () => {
    it('matches the snapshot', () => {
      tree = buildTree()
      expect(tree).toMatchSnapshot()
    })
  })
})
