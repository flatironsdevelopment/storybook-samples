import styled from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  ${media.lessThan('medium')`
    display: flex;
    flex-direction: column-reverse;
    max-width: 500px;
    margin: 0 20px;
  `}
`
