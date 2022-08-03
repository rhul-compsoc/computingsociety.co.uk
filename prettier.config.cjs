const tailwindPlugin = require('prettier-plugin-tailwindcss');
const sortImportsPlugin = require('@trivago/prettier-plugin-sort-imports');

/**
 * @type {import('@types/prettier').Options}
 */
module.exports = {
	// import sort config
	importOrder: ['<THIRD_PARTY_MODULES>', '^[./]', '^[../]'],
	importOrderSeparation: true,

	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	htmlWhitespaceSensitivity: 'strict',
	parsers: {
		typescript: {
			...tailwindPlugin.parsers.typescript,
			preprocess: sortImportsPlugin.parsers.typescript.preprocess
		}
	},
	options: {
		...sortImportsPlugin.options
	}
};
