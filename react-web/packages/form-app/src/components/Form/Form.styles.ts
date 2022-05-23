import {
  Field as FormikField,
  Form as FormikForm,
  Formik as FormikWrapper
} from 'formik'
import styled from 'styled-components'
import media from 'styled-media-query'

// import { FormProps } from '.'

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Title = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.font.secondary};
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: 36px;
  line-height: 44px;
  color: ${({ theme }) => theme.colors.title};
`

export const SubTitle = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.font.primary};
  font-weight: ${({ theme }) => theme.font.normal};
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.formText};
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 110px;

  ${media.lessThan('medium')`
    margin: 0 20px;
  `}
`

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  font-size: 12px;
  line-height: 16px;
  margin-top: 10px;
`

export const Field = styled(FormikField)<any>`
  font-family: ${({ theme }) => theme.font.primary};
  width: 100%;
  height: 48px;
  color: ${({ theme }) => theme.colors.title};
  border-radius: ${({ theme }) => theme.border.form};
  border: 1px solid ${({ theme }) => theme.colors.form};

  padding: 10px;
  margin-top: 30px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`

export const TextArea = styled(Field)`
  height: 100px;
`

export const Form = styled(FormikForm)`
  width: 100%;
`

export const Formik = styled(FormikWrapper)``
