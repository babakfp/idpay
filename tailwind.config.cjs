const colors = require('tailwindcss/colors')

const config = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
			maxHeight: theme => {
        return {
          ...theme('spacing'),
          ...theme('maxWidth'),
        }
      },
      maxWidth: theme => {
        return {
          ...theme('spacing'),
          'sm-bigger': '26rem',
        }
      },
			minWidth: theme => theme('spacing'),
			minHeight: theme => theme('spacing'),
			colors: {
        // 'text-base': colors.neutral[700],
				gray: colors.neutral,
				brand: {
					light: '#5bb4b0',
					DEFAULT: '#4C9B97',
					dark: '#418985',
				},
			},
			borderRadius: {
				DEFAULT: '8px',
			},
      zIndex: { 
				1: '1',
				2: '2',
				3: '3',
			},
		},
		container: {
			center: true,
			padding: '1rem',
		},
    fontFamily: {
      'dana': ['dana', 'poppins'],
    },
    fontWeight: {
      hairline: 50,
      thin: 100,
      extralight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
      extrablack: 950,
      heavy: 980,
      fat: 990,
    },
  },
  plugins: [],
}

module.exports = config
