// @flow
import React from 'react'
import cx from 'classnames'

import styles from './Contact.scss'

type ContactProps = {
  className?: string,
}

function Contact (props: ContactProps) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      Contact hello world
    </div>
  )
}

export default Contact
