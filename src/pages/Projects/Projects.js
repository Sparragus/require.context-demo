// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import styles from './Projects.scss'
import paths from '../../lib/paths'

type ProjectsProps = {
  className?: string,
}

function Projects (props: ProjectsProps) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      Projects

      <ul>
        <li>
          <Link to={paths.project({ projectId: 123 })}>
            Project 123
          </Link>
        </li>

        <li>
          <Link to={paths.project({ projectId: 777 })}>
            Project 777
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Projects
