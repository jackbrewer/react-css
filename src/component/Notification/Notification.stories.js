import React from 'react'
import { storiesOf } from '@storybook/react'

import Notification from './Notification'

const stories = storiesOf('Notification', module)

const dismissNotification = (e) => {
  const notificationEl = e.target.closest('.notification')
  notificationEl.style.opacity = 0
  setTimeout(() => { notificationEl.style.opacity = 1 }, 2000)
  console.log('Dismissed')
}

stories.add('Default state',
  () =>
    <Notification
      heading="Example Title"
      text="Donec id elit non mi porta gravida at eget metus."
      className="optional-class"
    />
)

stories.add('With HTML content',
  () =>
    <Notification>
      <p>Example with <a href="#">Link</a></p>
      <ul>
        <li>children passed via props</li>
      </ul>
    </Notification>
)

stories.add('With multiple states',
  () =>
    <div>
      <Notification
        state="notice"
      >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
      <Notification
        state="warning"
      >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
      <Notification
        state="error"
      >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
      <Notification
        state="success"
      >
        Donec id elit non mi <a href="#">porta gravida</a> at eget metus.
      </Notification>
    </div>
)

stories.add('With dismiss function',
  () =>
    <div>
      <Notification
        handleDismiss={dismissNotification}
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="notice"
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="warning"
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="success"
        text="Donec id elit non mi porta gravida at eget metus."
      />
      <Notification
        handleDismiss={dismissNotification}
        state="error"
        text="Donec id elit non mi porta gravida at eget metus."
      />
    </div>
)
