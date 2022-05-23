import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test-utils'
import { GradientBackground } from './GradientBackground.component'

// import theme from '../../styles/Theme'

describe('<GradientBackground />', () => {
  it('should render the GradientBackground component', () => {
    renderWithTheme(<GradientBackground />)
    expect(screen.getByTestId('gradient-background-id')).toBeInTheDocument()
  })
})
