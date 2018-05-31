// @flow
import React from 'react'
import cx from 'classnames'

import styles from './Home.scss'
import Home from './Home'

type HomeContainerProps = {
  className?: string,
}

class HomeContainer extends React.Component<HomeContainerProps> {
  render () {
    return (
      <Home {...this.props} />
    )
  }
}

export default HomeContainer
