// @flow
/* eslint-env jest */
import HomeContainer from '../HomeContainer'

describe('Home exports', () => {
  it('exports HomeContainer by default', () => {
    expect(
      require('..').default
    ).toBe(
      HomeContainer
    )
  })
})
