import { h } from 'preact'

import { BaseIconProps } from '../types'
import { pallette } from '../../theme'

export function Cross({ size = 24, color = pallette('Rubber'), strokeWidth = 2, ...svgProps }: BaseIconProps) {
  return (
    <svg
      {...svgProps}
      fill="none"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      viewBox="0 0 24 24"
      stroke={color}
    >
      <polyline points="7,7 17,17" />
      <polyline points="17,7 7,17" />
    </svg>
  )
}
