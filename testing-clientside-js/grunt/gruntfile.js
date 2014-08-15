module.exports = function(grunt){
	grunt.initConfig({
		jasmine: {
			pivotal: {
				src: 'code/*.js',
				options: {
					specs: 'tests/jasmine/tests.js'
					}
			}
		},
		jshint:{
			all: ['tests/jasmine/tests.js', 'code/**/*.js'],
			options: {
				curly: true
			}
		},
		watch:{
			files: ['tests/**/*.js', 'code/**/*.js'],
			tasks: ['jshint', 'jasmine']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default',['jasmine']);
};