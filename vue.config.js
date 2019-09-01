module.exports = {
	publicPath: './',
	runtimeCompiler: true,

	css: {
		loaderOptions: {
			sass: {
				data: '\n          @import "@/assets/scss/common.scss";\n        '
			}
		}
	}
}
