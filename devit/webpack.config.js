const defaultConfig = require('@wordpress/scripts/config/webpack.config');
module.exports = {
	...defaultConfig,
	entry: {
		accordion: './src/blocks/accordion',
		'accordion-item': './src/blocks/accordion-item',
	},
};
