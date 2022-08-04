import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
		alias: {
			$store: 'src/store',
		},
  },
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
