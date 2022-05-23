import { waitFor } from '@testing-library/react-native'
import * as React from 'react'
import { renderWithTheme } from '../../utils/test-helper'
import { Button } from './button.component'
// import theme from '../../styles/Theme'

describe('<Button />', () => {
  const testId = 'component-button-id'

  it('should render the Button component', async () => {
    const { queryByTestId } = renderWithTheme(
      <Button testId={testId} title="teste" />
    )
    await waitFor(() => expect(queryByTestId(testId)).toBeTruthy())
  })
})
