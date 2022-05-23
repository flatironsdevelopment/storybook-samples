import * as S from './GradientBackground.styles'

export interface GradientBackgroundProps {
  testId?: string
}

export const GradientBackground = ({
  testId = 'gradient-background-id'
}: GradientBackgroundProps) => {
  return <S.Container data-testid={testId} />
}
