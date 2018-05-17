import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'

import { NotificationWrapper } from './component'

const Notification = ({ children, className, handleDismiss, heading, text, state }) => {
  if (!children && !heading && !text) return null
  return (
    <NotificationWrapper state={state}>
      {handleDismiss &&
        <button className="notification__action" onClick={handleDismiss}>
          x
        </button>
      }
      {heading && <div className="notification__heading">{heading}</div>}
      {(text || children) &&
        <div className="notification__content">
          {text && <p>{text}</p>}
          {children}
        </div>
      }
    </NotificationWrapper>
  )
}

Notification.propTypes = {
  children: PropTypes.node,
  handleDismiss: PropTypes.func,
  heading: PropTypes.string,
  text: PropTypes.string,
  state: PropTypes.oneOf([ 'notice', 'warning', 'error', 'success' ])
}

export default withTheme(Notification)
