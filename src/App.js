import React, { Component } from 'react';
import Notification from './component/Notification'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Notification
          heading="Default Notification"
        >
          Hello
        </Notification>

        <Notification
          heading="Success Notification"
          state="success"
        >
          Hello
        </Notification>

        <Notification
          heading="Notice Notification"
          state="notice"
        >
          Hello
        </Notification>

        <Notification
          heading="Warning Notification"
          state="warning"
        >
          Hello
        </Notification>

        <Notification
          heading="Error Notification"
          state="error"
        >
          Hello
        </Notification>

      </div>
    );
  }
}

export default App;
