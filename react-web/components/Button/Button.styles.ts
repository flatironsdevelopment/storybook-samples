import styled from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'

import { ButtonProps } from './interfaces'

export const Button = styled.button<ButtonProps>`
  width: 198px;
  height: 48px;
  margin: 8px;

  background-color: ${({ isActive, isOutline }) => {
    if (isOutline) return '#ffffff'
    return isActive ? '#F18A8D' : '#FCE8E8'
  }};

  color: ${({ isOutline }) => (isOutline ? '#F18A8D' : '#ffffff')};

  border-radius: 34px;
  border: none;

  font-weight: 400;

  ${media.lessThan('medium')`
    display: block;
    width: 100%;
  `}

  &:hover {
    background: ${({ isOutline, isActive }) => {
      if (!isActive) return '#FCE8E8'

      if (isOutline) {
        return darken(0.1, '#ffffff')
      }
      const currentColor = isActive ? '#F18A8D' : '#FCE8E8'

      return darken(0.1, currentColor)
    }};
  }
`
