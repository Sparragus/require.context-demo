// @flow
import React from 'react'

import Contact from './Contact'

type ContactContainerProps = {
  className?: string,
}

class ContactContainer extends React.Component<ContactContainerProps> {
  render () {
    return (
      <Contact {...this.props} />
    )
  }
}

export default ContactContainer
