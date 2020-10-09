import { h } from 'preact'
import { styled } from 'linaria/react'
import { memo } from 'preact/compat'

import { textStyle } from '../../theme'

export interface TitleProps {
  text: string
}

export const MemoedTitle = memo(Title)

function Title({ text }: TitleProps) {
  return <Container>{text}</Container>
}

const Container = styled.div`
  display: flex;
  ${textStyle('title')};
  opacity: 0.7;
  margin-left: var(--indent);
  margin-right: var(--indent);
`
