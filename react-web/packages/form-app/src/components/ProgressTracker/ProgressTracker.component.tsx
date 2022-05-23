import * as S from './ProgressTracker.styles'

export interface ProgressTrackerProps {
  testId?: string
  step: number
}

export const ProgressTracker = ({
  testId = 'component-progress-tracker-id',
  step
}: ProgressTrackerProps) => {
  return (
    <S.Container data-testid={testId}>
      <S.Tracker>
        <S.Step step={1} isActive={true}>
          <S.Text isActive={true}>Personal Info</S.Text>
        </S.Step>
        <S.Step step={2} isActive={step > 0}>
          <S.Text isActive={step > 0}>Provider Info</S.Text>
        </S.Step>
        <S.Step step={3} isActive={step > 1}>
          <S.Text isActive={step > 1}>Contact Info</S.Text>
        </S.Step>
      </S.Tracker>
    </S.Container>
  )
}
