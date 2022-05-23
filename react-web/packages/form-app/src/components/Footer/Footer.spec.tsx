import { screen } from '@testing-library/react'
import * as useForm from '../../providers/useForm'
import { renderWithTheme } from '../../utils/test-utils'
import { Footer } from './Footer.component'

const baseMockHook = {
  goBack: jest.fn(),
  saveAndContinue: jest.fn(),
  index: 0
}

describe('<Footer />', () => {
  beforeEach(() => {
    jest.spyOn(useForm, 'useForm').mockImplementation(() => baseMockHook as any)
  })
  it('should render the Footer component', () => {
    renderWithTheme(<Footer isActive {...baseMockHook} />)
    expect(screen.getByTestId('footer-id')).toBeInTheDocument()
  })

  it('should not render the goback button when it is on the first page', () => {
    renderWithTheme(<Footer isActive {...baseMockHook} />)
    expect(screen.queryByText('Go Back')).not.toBeInTheDocument()
    expect(screen.queryByText('Save And Continue')).toBeInTheDocument()
  })

  it('should not render the goback button when it is on the first page', () => {
    const mockHook = { ...baseMockHook, index: 1 }
    jest.spyOn(useForm, 'useForm').mockImplementation(() => mockHook as any)
    renderWithTheme(<Footer isActive {...mockHook} />)
    expect(screen.queryByText('Go Back')).toBeInTheDocument()
    expect(screen.queryByText('Save And Continue')).toBeInTheDocument()
  })
})
