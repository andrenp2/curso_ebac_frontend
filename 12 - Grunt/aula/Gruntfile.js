module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'main.css': 'main.less'
                }
            },
            production: {
                options: {
                    compress: true, 
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main2.css' : 'main.scss'
                }
            }
        },
        concurrent: {
            target: ['olaGrunt', 'less', 'sass']
        }
    })

    grunt.registerTask('olaGrunt', function() {
        const done = this.async(); // eu aviso que essa função é assincrona e que deve esperar
        setTimeout(function() {
            console.log('Olá grunt');
            done();
        }, 3000);
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask('default', ['concurrent']);
}

// plugin do less dentro do grunt npm install --save-dev grunt-contrib-less