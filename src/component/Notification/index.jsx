import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Notification.css'

const Notification = ({ children, className, handleDismiss, heading, text, state }) => {
  if (!children && !heading && !text) return null
  const componentClassName = classNames(
    'notification',
    state ? `notification--${state}` : null,
    className
  )
  return (
    <div className={componentClassName}>
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
    </div>
  )
}

Notification.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  handleDismiss: PropTypes.func,
  heading: PropTypes.string,
  text: PropTypes.string,
  state: PropTypes.oneOf([ 'notice', 'warning', 'error', 'success' ])
}

export default Notification
