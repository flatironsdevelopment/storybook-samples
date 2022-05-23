import { screen } from '@testing-library/react'
import { renderWithTheme } from '../../utils/test-utils'
import { ProgressTracker } from './ProgressTracker.component'

// import theme from '../../styles/Theme'

describe('<ProgressTracker />', () => {
  it('should render the ProgressTracker component', () => {
    renderWithTheme(<ProgressTracker step={1} />)
    expect(
      screen.getByTestId('component-progress-tracker-id')
    ).toBeInTheDocument()
  })
})
