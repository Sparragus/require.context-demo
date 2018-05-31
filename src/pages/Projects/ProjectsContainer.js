// @flow
import React from 'react'
import cx from 'classnames'

import styles from './Projects.scss'
import Projects from './Projects'

type ProjectsContainerProps = {
  className?: string,
}

class ProjectsContainer extends React.Component<ProjectsContainerProps> {
  render () {
    return (
      <Projects {...this.props} />
    )
  }
}

export default ProjectsContainer
