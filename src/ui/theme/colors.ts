export const colors = {
  'Accent Orange': '#ffa011',
  'Divider Gray': '#b3b3b3',
  Rubber: '#000',
  Snow: '#fff',
  'Dark Steel': '#333',
  'Accent Xenon Blue': '#007aff',
  'Grass Green': '#60d66a',
  'Silver gray': '#eee',
  Error: '#ea4242',
} as const

export type Colors = typeof colors
export type ColorName = keyof Colors
