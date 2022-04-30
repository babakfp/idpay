const config = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
			colors: {
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
