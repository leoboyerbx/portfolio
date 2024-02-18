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
    colors: {},
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],
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
