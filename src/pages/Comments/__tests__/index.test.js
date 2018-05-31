// @flow
/* eslint-env jest */
import CommentsContainer from '../CommentsContainer'

describe('Comments exports', () => {
  it('exports CommentsContainer by default', () => {
    expect(
      require('..').default
    ).toBe(
      CommentsContainer
    )
  })
})
