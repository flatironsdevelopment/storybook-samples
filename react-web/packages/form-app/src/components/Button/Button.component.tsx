import * as S from './Button.styles'

import { ButtonProps } from './interfaces'

export const Button = ({
  testId = 'button-id',
  isActive = false,
  isOutline = false,
  text = '',
  ...props
}: ButtonProps) => {
  return (
    <S.Button
      data-testid={testId}
      isActive={isActive}
      isOutline={isOutline}
      onClick={(event) => {
        isActive && props.onClick && props.onClick(event)
      }}
    >
      {text}
    </S.Button>
  )
}
