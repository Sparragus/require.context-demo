// @flow
/* eslint-env jest */
import AboutContainer from '../AboutContainer'

describe('About exports', () => {
  it('exports AboutContainer by default', () => {
    expect(
      require('..').default
    ).toBe(
      AboutContainer
    )
  })
})
