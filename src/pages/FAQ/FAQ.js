// @flow
import React from 'react'
import cx from 'classnames'

import styles from './FAQ.scss'

type FAQProps = {
  className?: string,
}

function FAQ (props: FAQProps) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      FAQ
    </div>
  )
}

export default FAQ
