import type { Config } from '@pandacss/types'
import { breakpoints } from './breakpoints'
import { colors } from './colors/core'
import { semanticColors } from './colors/semantic'
import { durations, easings } from './motions'
import { radii } from './radii'
import { semanticShadows } from './shadows'
import { sizes } from './sizes'
import { spacing } from './spacing'
import { fontSizes, fontWeights, fonts, lineHeights, textStyles } from './typography'

const defineConfig = <T extends Config>(config: T) => config

export const preset = defineConfig({
  theme: {
    breakpoints: breakpoints,
    textStyles: textStyles,
    tokens: {
      colors: colors,
      radii: radii,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      lineHeights: lineHeights,
    //   letterSpacings: letterSpacings,
      fonts: fonts,
      spacing: spacing,
      sizes: sizes,
      easings: easings,
      durations: durations
    },
    semanticTokens: {
      colors: semanticColors,
      shadows: semanticShadows,
    },
  },
})

export default preset
