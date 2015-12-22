<<<<<<< HEAD


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
=======
module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

    concat: {   
        dist: {
            src: [
                'js/libs/*.js', // All JS in the libs folder
                'js/global.js'  // This specific file
            ],
            dest: 'js/build/production.js',
        }
    }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify']);

};
>>>>>>> 72e8b5b22b61469a57ec1c64bb2d2b2bb720ace1
