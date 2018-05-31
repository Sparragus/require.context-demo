// @flow
import React from 'react'

import Comments from './Comments'

type CommentsContainerProps = {
  className?: string,
}

class CommentsContainer extends React.Component<CommentsContainerProps> {
  render () {
    return (
      <Comments {...this.props} />
    )
  }
}

export default CommentsContainer
