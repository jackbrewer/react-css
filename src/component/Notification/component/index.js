import styled, { withTheme } from 'styled-components'

const NotificationWrapper = withTheme(styled.div`
  position: relative;
  padding: 10px;
  background: ${props => props.theme.color.state[`${props.state}`]};
  border: 1px solid ${props => props.theme.color.state[`${props.state}`]};
  color: #000;
  transition: opacity 0.3s ease-out;

  /* https://github.com/styled-components/styled-components/issues/781 */
  & + ${() => NotificationWrapper} {
    margin-top: 20px;
  }
`)

export { NotificationWrapper }
