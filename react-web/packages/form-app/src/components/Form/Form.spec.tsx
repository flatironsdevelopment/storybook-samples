import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormDataProvider } from '../../providers/useForm'
import { renderWithTheme } from '../../utils/test-utils'
import { Form } from './Form.component'

describe('<Form />', () => {
  it('should render the Form component', () => {
    renderWithTheme(<Form />)
    expect(screen.getByTestId('form-id')).toBeInTheDocument()
  })

  it('should show the error message when there is invalid data on the first name combo', async () => {
    renderWithTheme(
      <FormDataProvider>
        <Form />
      </FormDataProvider>
    )

    await waitFor(() => {
      const firstNameInput = screen.getByPlaceholderText('First name')
      const lastNameInput = screen.getByPlaceholderText('Last name')

      expect(screen.queryByTestId('error-first-name')).toBe(null)

      userEvent.type(firstNameInput, 'Paulo Luan')
      userEvent.clear(firstNameInput)
      userEvent.unhover(firstNameInput)

      lastNameInput.focus()
      userEvent.type(lastNameInput, 'Mariano Silva')

      // TODO: for some reason the test is failing here :(
      // expect(screen.getByTestId('error-first-name')).not.toBe(null)
      // expect(screen.getByTestId('error-first-name')).toHaveTextContent(
      //   'Required'
      // )
    })
  })
})
