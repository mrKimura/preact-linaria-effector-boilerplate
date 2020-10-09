import { h } from 'preact'
import { styled } from 'linaria/react'

import { MemoedTitle } from 'ui'

export function App() {
  return (
    <Container>
      <MemoedTitle text="ITS WORKED!!!" />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`
