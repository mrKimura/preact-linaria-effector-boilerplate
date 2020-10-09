import { styled } from 'linaria/react'

type Direction = 'top' | 'bottom' | 'left' | 'right'

export interface BreakProps {
  direction?: Direction
  indent: number
}

export const Break = styled.div<BreakProps>`
  flex-grow: 0;
  flex-shrink: 0;
  margin: ${({ direction, indent }) => getMargin(indent, direction)};
`

function getMargin(indent: number, direction: Direction = 'bottom') {
  switch (direction) {
    case 'top':
      return `${indent}px 0 0 0`
    case 'right':
      return `0 ${indent}px 0 0`
    case 'bottom':
      return `0 0 ${indent}px 0`
    case 'left':
      return `0 0 0 ${indent}px`
    default:
      return '0'
  }
}
