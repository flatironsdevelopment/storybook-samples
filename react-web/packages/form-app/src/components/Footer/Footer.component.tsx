import { useForm } from '../../providers'
import { Button } from '../Button'
import * as S from './Footer.styles'

export interface FooterProps {
  testId?: string
  isActive: boolean
  index: number
  saveAndContinue: () => void
  goBack: () => void
}

export const Footer = ({
  testId = 'footer-id',
  isActive,
  goBack,
  saveAndContinue,
  index
}: FooterProps) => {
  const SHOULD_RENDER_BACK_BUTTON = index > 0
  return (
    <S.Container data-testid={testId}>
      <S.Wrapper>
        {SHOULD_RENDER_BACK_BUTTON && (
          <Button
            text={`Go Back`}
            isActive={true}
            isOutline={true}
            onClick={goBack}
          />
        )}
        <Button
          text={`Save And Continue`}
          isActive={isActive}
          onClick={saveAndContinue}
        />
      </S.Wrapper>
    </S.Container>
  )
}
