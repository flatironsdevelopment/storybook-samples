import styled, { css } from 'styled-components/native'

export const Button = styled.TouchableOpacity<any>`
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 56px;
  padding: 18px;
  border-radius: 10px;
  background-color: red;

  margin: 10px;

  ${(props) =>
    props.type === 'outline' &&
    css`
      background-color: white;
      border: 2px red solid;
    `}
`

export const ButtonText = styled.Text<any>`
  color: white;
  font-size: 18px;

  ${(props) =>
    props.type === 'outline' &&
    css`
      color: red;
    `}
`
