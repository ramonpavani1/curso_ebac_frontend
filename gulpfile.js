// Importa as dependências
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

// Caminhos para os arquivos de entrada e saída
const paths = {
  styles: {
    src: 'src/sass/**/*.scss',  // Diretório dos arquivos SASS
    dest: 'dist/css/'           // Diretório de saída para CSS
  },
  scripts: {
    src: 'src/js/**/*.js',      // Diretório dos arquivos JS
    dest: 'dist/js/'            // Diretório de saída para JS comprimido
  },
  images: {
    src: 'src/images/**/*',     // Diretório das imagens
    dest: 'dist/images/'        // Diretório de saída para imagens comprimidas
  }
};

// Função para compilar SASS
function compileSass() {
  return gulp.src(paths.styles.src)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compila e comprime o SASS
    .pipe(gulp.dest(paths.styles.dest));
}

// Função para comprimir imagens
function compressImages() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())  // Comprime as imagens
    .pipe(gulp.dest(paths.images.dest));
}

// Função para comprimir JavaScript
function compressJs() {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())  // Comprime o JavaScript
    .pipe(gulp.dest(paths.scripts.dest));
}

// Função para observar mudanças nos arquivos e rodar as tarefas automaticamente
function watchFiles() {
  gulp.watch(paths.styles.src, compileSass);
  gulp.watch(paths.scripts.src, compressJs);
  gulp.watch(paths.images.src, compressImages);
}

// Define as tarefas que podem ser executadas
exports.sass = compileSass;
exports.images = compressImages;
exports.js = compressJs;
exports.watch = watchFiles;

// Tarefa padrão: compila SASS, comprime JS e imagens
exports.default = gulp.series(compileSass, compressJs, compressImages, watchFiles);
