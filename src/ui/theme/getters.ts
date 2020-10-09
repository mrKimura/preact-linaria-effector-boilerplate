import { prop } from 'rambda'

import { colors, ColorName, Colors } from './colors'
import { fonts, Fonts, FontName } from './fonts'

export function pallette(colorName: ColorName) {
  return prop<ColorName, Colors>(colorName, colors)
}

export function textStyle(fontName: FontName) {
  return prop<FontName, Fonts>(fontName, fonts)
}
