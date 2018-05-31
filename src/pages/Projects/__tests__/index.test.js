// @flow
/* eslint-env jest */
import ProjectsContainer from '../ProjectsContainer'

describe('Projects exports', () => {
  it('exports ProjectsContainer by default', () => {
    expect(
      require('..').default
    ).toBe(
      ProjectsContainer
    )
  })
})
