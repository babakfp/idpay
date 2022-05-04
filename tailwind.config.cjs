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
		},
		container: {
			center: true,
			padding: '1rem',
		},
  },
  plugins: [],
}

module.exports = config
