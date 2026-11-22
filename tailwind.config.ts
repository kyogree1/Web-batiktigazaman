import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        forest: '#193f2d',
        cream: '#f2e1c7',
        sand: '#ead1ae',
        paper: '#faead3',
        olive: '#887a49',
        cocoa: '#261003',
        rust: '#8c3b0b',
      },
      fontFamily: {
        display: ['Arial', 'Helvetica', 'sans-serif'],
        buenard: ['Buenard', 'Georgia', 'serif'],
        poppins: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
}
