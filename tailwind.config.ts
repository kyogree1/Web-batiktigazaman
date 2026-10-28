import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        forest: '#193f2d',
        cream: '#f2e1c7',
        sand: '#ead1ae',
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
}
