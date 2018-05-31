// @flow
/* eslint-env jest */
import ContactContainer from '../ContactContainer'

describe('Contact exports', () => {
  it('exports ContactContainer by default', () => {
    expect(
      require('..').default
    ).toBe(
      ContactContainer
    )
  })
})
