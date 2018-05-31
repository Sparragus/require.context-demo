// @flow
import React from 'react'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import styles from './Project.scss'
import paths from '../../lib/paths'

type ProjectProps = {
  className?: string,
}

function Project (props: ProjectProps) {
  const {
    className,
    match
  } = props

  const { projectId } = match.params

  return (
    <div className={cx(styles.container, className)}>
      <p>
        Project: {projectId}
      </p>

      <p>
        Read all the <Link to={paths.comments({ projectId })}>comments</Link>
      </p>
    </div>
  )
}

export default Project
