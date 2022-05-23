import styled from 'styled-components'
import { darken } from 'polished'
import media from 'styled-media-query'

import { ButtonProps } from './interfaces'

export const Button = styled.button<ButtonProps>`
  width: 198px;
  height: 48px;
  margin: 8px;

  background-color: ${({ theme, isActive, isOutline }) => {
    if (isOutline) return theme.colors.white
    return isActive ? theme.colors.buttonActive : theme.colors.buttonInactive
  }};

  color: ${({ theme, isOutline }) =>
    isOutline ? theme.colors.buttonActive : theme.colors.white};

  border-radius: ${({ theme }) => theme.border.button};
  border: none;

  font-weight: ${({ theme }) => theme.font.extraBold};

  ${media.lessThan('medium')`
    display: block;
    width: 100%;
  `}

  &:hover {
    background: ${({ theme, isOutline, isActive }) => {
      if (!isActive) return theme.colors.buttonInactive

      if (isOutline) {
        return darken(0.1, theme.colors.white)
      }
      const currentColor = isActive
        ? theme.colors.buttonActive
        : theme.colors.buttonInactive

      return darken(0.1, currentColor)
    }};
  }
`
