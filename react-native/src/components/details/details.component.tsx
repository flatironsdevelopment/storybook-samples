import * as React from 'react'
import * as S from './details.styles'

export interface DetailsProps {
  testId?: string
  headline?: string
  subtitle?: string
  article?: string
  readMore?: boolean
}

export const Details = ({
  testId = 'component-details-id',
  headline,
  subtitle,
  article,
  readMore = false,
  ...props
}: DetailsProps) => {
  return (
    <>
      <S.Wrapper testID={testId} {...props}>
        <S.Headline>{headline}</S.Headline>
        <S.SubHeadline>{subtitle}</S.SubHeadline>

        {readMore ? (
          <>
            <S.Text ellipsizeMode="tail" numberOfLines={3}>
              {article}
            </S.Text>
            <S.Text>read more...</S.Text>
          </>
        ) : (
          <S.Text readMore>{article}</S.Text>
        )}
      </S.Wrapper>
    </>
  )
}
