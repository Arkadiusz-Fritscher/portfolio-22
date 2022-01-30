module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      sm: '24em',
      tablet: '52em',
      desktop: '78em',
    },
    colors: {
      tristesse: 'var(--af-color-tristesse)',
      'dark-rift': 'var(--af-color-dark-rift)',
      'grey-heather': 'var(--af-color-grey-heather)',
      'powder-dust': 'var(--af-color-powder-dust)',
      ruddy: 'var(--af-color-ruddy)',
      'chefs-hat': 'var(--af-color-chefs-hat)',
    },
    fontSize: {
      caption: [
        'var(--af-text-caption)',
        { letterSpacing: '0.03em', lineHeight: '100%' },
      ],
      sm: [
        'var(--af-text-sm)',
        { letterSpacing: '0.025rem', lineHeight: '100%' },
      ],
      base: [
        'var(--af-text-base)',
        { letterSpacing: '0.02em', lineHeight: '150%' },
      ],
      lg: [
        'var(--af-text-lg)',
        { letterSpacing: '-0.003em', lineHeight: '110%' },
      ],
      xl: [
        'var(--af-text-xl)',
        { letterSpacing: '-0.003em', lineHeight: '130%' },
      ],
      '2xl': [
        'var(--af-text-2xl)',
        { letterSpacing: '-0.025em', lineHeight: '106%' },
      ],
      '3xl': [
        'var(--af-text-3xl)',
        { letterSpacing: '-0.05em', lineHeight: '100%' },
      ],
      display: [
        'var(--af-text-display)',
        { letterSpacing: '-0.07em', lineHeight: '90%' },
      ],
    },
    fontFamily: {
      sans: ['Inter, sans-serif'],
      serif: ['Baskervville, serif'],
    },
    extend: {},
  },
  plugins: [],
}
