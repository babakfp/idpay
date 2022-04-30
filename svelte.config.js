import path from 'path'
import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

const config = {
  kit: {
    adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					'$lib': path.resolve('src/lib'),
					'$store': path.resolve('src/store'),
				},
			},
		},
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
