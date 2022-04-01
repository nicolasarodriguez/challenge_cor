import React from 'react'
import { string } from 'prop-types'

const namespace = 'ui-emptystate'

const EmptyState = ({
  text,
  image
}) => {
  return (
    <div className={`${namespace}`}>
        <img
          className={`${namespace}__image`}
          src={process.env.PUBLIC_URL + '/assets/' + image}
          alt='empty state'
        />
        <p className={`${namespace}__text`}>{text}</p>
    </div>
  )
}

EmptyState.propTypes = {
  text: string.isRequired,
  image: string.isRequired
}

export default EmptyState
