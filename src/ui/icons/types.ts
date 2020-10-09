import { JSX } from 'preact'

export interface BaseIconProps extends JSX.SVGAttributes<SVGSVGElement> {
  color?: string
  size?: number
}
