


    // concat: {   
    //     dist: {
    //         src: [
    //             'js/libs/*.js', // All JS in the libs folder
    //             'js/global.js'  // This specific file
    //         ],
    //         dest: 'js/build/production.js',
    //     }
    // }


module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    lineNumber: true,
                    debugInfo: false,
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'css/src',
                    src: ['*.scss'],
                    dest: 'css/build',
                    ext: '.css'
                }]
            }
        },
        watch: {
            css: {
                files: 'css/src/*.scss',
                tasks: ['sass']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
}

