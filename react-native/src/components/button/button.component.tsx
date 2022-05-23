import React from 'react'
import * as S from './button.styles'

export interface ButtonProps {
  testId?: string
  title: string
  type?: 'outline' | 'solid'
}

export const Button = ({
  testId = 'component-button-id',
  type = 'solid',
  ...props
}: ButtonProps) => {
  return (
    <S.Button testID={testId} type={type} {...props}>
      <S.ButtonText type={type}>{props.title}</S.ButtonText>
    </S.Button>
  )
}
