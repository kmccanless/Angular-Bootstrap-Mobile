module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jade: {
            compile: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty : true
                },
                files: {
                    "./www/index.html": ["./views/index.jade"]
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true,flatten :true, src: ['public/images/*'], dest: 'www/img/', filter: 'isFile'},
                    {expand: true,flatten :true, src: ['public/stylesheets/*'], dest: 'www/css/', filter: 'isFile'},
                    {expand: true,flatten :true, src: ['public/javascripts/*'], dest: 'www/js/', filter: 'isFile'},

                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['jade','copy']);

};