// @flow
import React from 'react'
import cx from 'classnames'

import styles from './About.scss'
import About from './About'

type AboutContainerProps = {
  className?: string,
}

class AboutContainer extends React.Component<AboutContainerProps> {
  render () {
    return (
      <About {...this.props} />
    )
  }
}

export default AboutContainer
