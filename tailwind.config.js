/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./**/*.html"],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
				roboto: ["Roboto", "sans-serif"],
				"roboto-c": ["Roboto Condensed", "sans-serif"],
			},
			colors: {
				"pos-text-primary": "#092B00",
        "pos-text-secondary": "#2c2c2c",
        "pos-text-tertiary": "#121212",
        "pos-text-search": "#595959",
				"pos-text-link": "#1890FF",
				"pos-gray": "#434343",
        "pos-gray-light": "#bfbfbf",
        "pos-gray-lighter": "#fafafa",
        "pos-gold": "#FAAD14",
        "pos-gold-pale": "FFFBE6",
        "pos-brown": "#874D00",
				"pos-success": "#237804",
        "pos-success-pale": "#F6FFED",
				"pos-error": "#F5222D",
				"pos-button-primary": "#FAAD14",
        "pos-button-disabled": "#FFE58F",
        "pos-bg-dark": "#2c3140",
        "pos-bg-surface-gray": "#fafafa",
        "pos-frame-border": "#8C8C8C",
        "pos-border-neutral": "#d9d9d9",
			},
      opacity: {
        '35': '0.35',
        '65': '0.65',
      },
      boxShadow: {
        'pos-md': '0 1px 3px 1px rgba(44, 41, 40, 0.15), 0 1px 2px 0 rgba(44, 41, 40, 0.07)',
        'pos-xl': '0 4px 8px 3px rgba(44, 41, 40, 0.15), 0 1px 3px 0 rgba(44, 41, 40, 0.07)',
      }
		},
	},
	plugins: [],
};
