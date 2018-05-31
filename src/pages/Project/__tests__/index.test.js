// @flow
/* eslint-env jest */
import ProjectContainer from '../ProjectContainer'

describe('Project exports', () => {
  it('exports ProjectContainer by default', () => {
    expect(
      require('..').default
    ).toBe(
      ProjectContainer
    )
  })
})
