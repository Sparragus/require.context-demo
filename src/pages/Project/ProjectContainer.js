// @flow
import React from 'react'
import cx from 'classnames'

import styles from './Project.scss'
import Project from './Project'

type ProjectContainerProps = {
  className?: string,
}

class ProjectContainer extends React.Component<ProjectContainerProps> {
  render () {
    return (
      <Project {...this.props} />
    )
  }
}

export default ProjectContainer
