// @flow
import React from 'react'

import FAQ from './FAQ'

type FAQContainerProps = {
  className?: string,
}

class FAQContainer extends React.Component<FAQContainerProps> {
  render () {
    return (
      <FAQ {...this.props} />
    )
  }
}

export default FAQContainer
