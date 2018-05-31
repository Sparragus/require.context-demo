// @flow
/* eslint-env jest */
import FAQContainer from '../FAQContainer'

describe('FAQ exports', () => {
  it('exports FAQContainer by default', () => {
    expect(
      require('..').default
    ).toBe(
      FAQContainer
    )
  })
})
