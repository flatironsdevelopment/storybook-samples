import { useForm } from '../../providers'
import * as S from './Form.styles'
import { PersonalInformationForm } from './PersonalForm.component'
import { ProviderInformationForm } from './ProviderForm.component'

export interface FormProps {
  testId?: string
}

const EmptyForm = () => {
  return (
    <S.FormWrapper>
      <S.Title>This is just an empty form!</S.Title>
      <S.SubTitle>
        <br />
        But... you can check above (on the header ☝🏼) <br /> that the
        ProgressTracking is working! 🎉
      </S.SubTitle>
    </S.FormWrapper>
  )
}

export const Form = ({ testId = 'form-id' }: FormProps) => {
  const { index } = useForm()
  return (
    <S.Container data-testid={testId}>
      {index === 0 && <PersonalInformationForm />}
      {index === 1 && <ProviderInformationForm />}
      {index === 2 && <EmptyForm />}
    </S.Container>
  )
}
