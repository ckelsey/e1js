"use strict";
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var stringify = require('stringify');
var plugins = require('gulp-load-plugins')();
var minifyCSS = require('gulp-minify-css');

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var gutil = require('gulp-util');
var path = require("path")
var jshint = require('gulp-jshint')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config.js');
var compiler = webpack(config);
var fs = require('fs')
var exec = require('child_process').exec;

var paths = {
	watch: ["./src/*,", "./src/**/*"],
	jshint: ["src/*.js,", "src/**/*.js"]
}

gulp.task('jshint', function () {
	return gulp.src(paths.jshint)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


gulp.task('server', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		},
		https: true,
		port: 3004
	});
});

gulp.task('index', function (done) {

});

gulp.task('publish', function (done) {
	exec('rm -R dist', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);

		exec('mkdir dist', function (err, stdout, stderr) {
			console.log(stdout);
			console.log(stderr);

			fs.writeFile('dist/index.js', 'import "./e1js.js";', function () {
				var pkg = require("./package.json")
				var ver = pkg.version.split(`.`).map((num) => { return parseInt(num) })
				var args = process.argv
				var oldVersion = pkg.version

				if (args.indexOf(`-breaking`) > -1) {
					ver[0] = ver[0] + 1
					ver[1] = 0
					ver[2] = 0
				}

				if (args.indexOf(`-bugfix`) > -1) {
					ver[1] = ver[1] + 1
					ver[2] = 0
				}

				if (args.indexOf(`-feature`) > -1) {
					ver[2] = ver[2] + 1
				}

				pkg.version = ver.join(`.`)

				fs.writeFile('package.json', JSON.stringify(pkg, null, "\t"), function () { })

				var prodConfig = Object.create(config);
				prodConfig.plugins = prodConfig.plugins.concat(
					new webpack.DefinePlugin({
						'process.env': {
							'NODE_ENV': JSON.stringify('production')
						}
					}),
					new webpack.optimize.UglifyJsPlugin()
				);

				// run webpack
				webpack(prodConfig, function (err, stats) {
					if (err) throw new gutil.PluginError('webpack:build', err);
					gutil.log('[webpack:build]', stats.toString({
						colors: true
					}));

					if (oldVersion === pkg.version) {
						done()
					} else {

						exec('git commit -a -m "build"', function (err, stdout, stderr) {
							console.log(stdout);
							console.log(stderr);

							exec('git push', function (err, stdout, stderr) {
								console.log(stdout);
								console.log(stderr);


								exec(`git tag -a v${pkg.version} -m "v${pkg.version}"`, function (err, stdout, stderr) {
									console.log(stdout);
									console.log(stderr);

									exec(`git push origin v${pkg.version}`, function (err, stdout, stderr) {
										console.log(stdout);
										console.log(stderr);

										exec(`npm publish`, function (err, stdout, stderr) {
											console.log(stdout);
											console.log(stderr);

											done()

										});

									});
								});

							});
						});
					}
				});
			})
		});
	});
});

gulp.task("dev", ["server", "jshint", "publish"], function () {
	gulp.watch(paths.watch, ["jshint", "publish"]);
});

gulp.task("default", [
	"dev"
], function () { });