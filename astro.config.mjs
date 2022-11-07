import { defineConfig } from 'astro/config';

// svelte
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
	integrations: [svelte(), tailwind()]
});
