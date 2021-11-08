/**
 * Webpack configuration.
 */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const cssnano = require("cssnano"); 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// JS Directory path.
const JS_DIR = path.resolve(__dirname, "src/js");
const IMG_DIR = path.resolve(__dirname, "src/images");
const BUILD_DIR = path.resolve(__dirname, "dist");

const entry = {
	main: JS_DIR + "/theme.js",
	single: JS_DIR + "/single.js",
	admin: JS_DIR + "/admin.js",
};

const output = {
	path: BUILD_DIR,
	filename: "js/[name].js",
};

/**
 * Note: argv.mode will return 'development' or 'production'.
 */
const plugins = (argv) => [
	new CleanWebpackPlugin({
		cleanStaleWebpackAssets: argv.mode === "production", // Automatically remove all unused webpack assets on rebuild, when set to true in production. ( https://www.npmjs.com/package/clean-webpack-plugin#options-and-defaults-optional )
	}),

	new MiniCssExtractPlugin({
		filename: "css/[name].css",
	}),
];

const rules = [
	{
		test: /\.js$/,
		include: [JS_DIR],
		exclude: /node_modules/,
		use: "babel-loader",
	},
	{
		test: /\.scss$/,
		exclude: /node_modules/,
		use: [MiniCssExtractPlugin.loader, "css-loader"],
	},
	{
		test: /\.(png|jpg|svg|jpeg|gif|ico)$/,
		use: {
			loader: "file-loader",
			options: {
				name: "images/[name].[ext]",
				publicPath: "production" === process.env.NODE_ENV ? "../" : "../../",
			},
		},
	},
];

module.exports = (env, argv) => ({
	entry: entry,

	output: output,
	devtool: "source-map",

	module: {
		rules: rules,
	},

	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin({
				cssProcessor: cssnano,
			}),

			new UglifyJsPlugin({
				cache: false,
				parallel: true,
				sourceMap: false,
			}),
		],
	},

	plugins: plugins(argv),

	externals: {
		jquery: "jQuery",
	},
});
