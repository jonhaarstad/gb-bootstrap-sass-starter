'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		project: {
			app: ['app'],
			assets: ['<%= project.app %>/assets'],
			css: ['<%= project.assets %>/scss/style.scss']
		},
		sass: {
			dev: {
				options: {
					style: 'expanded',
					compass: false
				},
				files: {
					'<%= project.assets %>/css/style.css':'<%= project.css %>'
				}
			}
		},
		watch: {
			sass: {
				files: '<%= project.assets %>/scss/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			}
		},
		// browserSync: {
		// 	bsFiles: {
		// 		src : '<%= project.assets %>s/css/*.css'
		// 	},
		// 	options: {
		// 		server: {
		// 			baseDir: "<%= project.app %>/"
		// 		}
		// 	}
		// }
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
