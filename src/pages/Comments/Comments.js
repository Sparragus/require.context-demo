// @flow
import React from 'react'
import cx from 'classnames'

import styles from './Comments.scss'

type CommentsProps = {
  className?: string,
}

function Comments (props: CommentsProps) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      Comments
    </div>
  )
}

export default Comments
