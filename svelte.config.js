import adapter from '@sveltejs/adapter-static';
/** @type {import('@sveltejs/kit').Config} */
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */


const config = {
	kit: {
		adapter: adapter({
			pages: './frontend',
			assets: './frontend',
		})
	},
	preprocess: vitePreprocess()
};

export default config;
