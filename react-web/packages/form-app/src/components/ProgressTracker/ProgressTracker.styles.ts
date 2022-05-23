import styled from 'styled-components'
import { ProgressTrackerProps } from './interfaces'

// import { ProgressTrackerProps } from '.'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const Tracker = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 500px;

  font-weight: 700;
  font-family: ${(props) => props.theme.font.primary};
`

export const Step = styled.li<ProgressTrackerProps>`
  list-style-type: none;
  float: left;
  width: 33.3%;
  position: relative;
  color: ${({ theme }) => theme.colors.wizardInactive};

  &:before {
    content: '${(props) => props.step}';
    display: block;
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.wizardActive : theme.colors.background};
    color: ${({ theme, isActive }) =>
      isActive ? theme.colors.white : theme.colors.wizardInactive};
    width: 26px;
    height: 26px;
    line-height: 26px;
    border: 2px solid
      ${({ theme, isActive }) =>
        isActive
          ? theme.colors.wizardActiveBorder
          : theme.colors.wizardGrayBorder};
    text-align: center;
    margin: 0 auto 8px auto;
    border-radius: 50%;
  }

  &:after {
    content: '';
    position: absolute;
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.colors.wizardActive : theme.colors.wizardGrayBorder};
    width: 100%;
    height: ${({ theme }) => theme.border.wizard};
    top: 12px;
    left: -50%;
    z-index: -1;
  }

  &:first-child:after {
    content: none;
  }
`

type TextProps = Pick<ProgressTrackerProps, 'isActive'>

export const Text = styled.span<TextProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.wizardActive : theme.colors.wizardInactive};
`
