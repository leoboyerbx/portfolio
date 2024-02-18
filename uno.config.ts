// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      theme: '#fce14b',
    },
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
      serif: ['Fragen', 'serif'],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      fonts: {},
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
