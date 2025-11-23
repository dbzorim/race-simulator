module.exports = {
	publicPath: "/uma-race-simulate/",
	chainWebpack: (config) => {
		config.module
			.rule("tsv")
			.test(/\.tsv$/)
			.use("raw-loader")
			.loader("raw-loader")
			.end();
	},
};
