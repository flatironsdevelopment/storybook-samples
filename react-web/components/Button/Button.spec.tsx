import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test-utils'
import { Button } from './Button.component'

// import theme from '../../styles/Theme'

describe('<Button />', () => {
  it('should render the Button component', () => {
    renderWithTheme(<Button />)
    expect(screen.getByTestId('button-id')).toBeInTheDocument()
  })

  it('should allow click for buttons that are active', () => {
    const mockHandleClick = jest.fn()
    renderWithTheme(<Button isActive onClick={mockHandleClick} />)
    const button = screen.getByTestId('button-id')
    expect(button).toBeInTheDocument()
    button.click()
    expect(mockHandleClick).toHaveBeenCalledTimes(1)
  })

  it('should not allow click for buttons that are inactive', () => {
    const mockHandleClick = jest.fn()
    renderWithTheme(<Button isActive={false} onClick={mockHandleClick} />)
    const button = screen.getByTestId('button-id')
    expect(button).toBeInTheDocument()
    button.click()
    expect(mockHandleClick).toHaveBeenCalledTimes(0)
  })
})
