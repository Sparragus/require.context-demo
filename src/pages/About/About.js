// @flow
import React from 'react'
import cx from 'classnames'

import styles from './About.scss'

type AboutProps = {
  className?: string,
}

function About (props: AboutProps) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      About
    </div>
  )
}

export default About
