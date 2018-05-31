// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import cx from 'classnames'

import styles from './Home.scss'
import paths from '../../lib/paths'

type HomeProps = {
  className?: string,
}

function Home (props: HomeProps) {
  const {
    className,
  } = props

  return (
    <div className={cx(styles.container, className)}>
      Home

      <nav>
        <ul>
          <li>
            <Link to={paths.about()}>
              About
            </Link>
          </li>

          <li>
            <Link to={paths.projects()}>
              Projects
            </Link>
          </li>

          <li>
            <Link to={paths.faq()}>
              FAQ
            </Link>
          </li>

          <li>
            <Link to={paths.contact()}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Home
