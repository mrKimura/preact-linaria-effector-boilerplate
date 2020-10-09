import { h } from 'preact'

import { BaseIconProps } from '../types'

export function Chevron({ size = 24, color, ...svgProps }: BaseIconProps) {
  return (
    <svg {...svgProps} fill="none" width={size} height={size} strokeWidth="2" viewBox="0 0 24 24">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  )
}
