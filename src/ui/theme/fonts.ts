export const fonts = {
  title: {
    fontSize: 22,
    lineHeight: 1,
    fontWeight: 700,
    letterSpacing: -0.4,
  },
  modalBig: {
    fontSize: 17,
    lineHeight: 1.29,
    fontWeight: 700,
    letterSpacing: -0.4,
  },
  modalText: {
    fontSize: 13,
    lineHeight: 1.23,
    fontWeight: 400,
  },
} as const

export type Fonts = typeof fonts
export type FontName = keyof Fonts
