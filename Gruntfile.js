module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      // Configuração para o plugin grunt-contrib-less
      less: {
        development: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            // O arquivo de saída será styles.css
            "output/styles.css": "input/styles.less"
          }
        }
      },
  
      // Configuração para o plugin grunt-contrib-uglify
      uglify: {
        options: {
          mangle: false // Para evitar a obfuscação dos nomes das variáveis
        },
        my_target: {
          files: {
            // O arquivo de saída será app.min.js
            'output/app.min.js': ['input/script.js']
          }
        }
      }
    });
  
    // Carregar os plugins que você precisa
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    // Registrar as tarefas
    grunt.registerTask('default', ['less', 'uglify']);
  };
  