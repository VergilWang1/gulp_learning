var gulp = require("gulp"),
    // autoprefixer = require("gulp-autoprefixer"),
    // clean = require("gulp-clean-css"),
    concat = require("gulp-concat"),
    // spriter = require("gulp-css-spriter"),
    // htmlmin = require("gulp-htmlmin"),
    // imagemin = require("gulp-imagemin"),
    // jshint = require("gulp-jshint"),
    // livereload = require("gulp-livereload"),
    minify = require("gulp-minify-css"),
    ngAnnotate = require("gulp-ng-annotate"),
    ngmin = require("gulp-ngmin"),
    notify = require("gulp-notify"),
    rename = require("gulp-rename"),
    // revAppend = require("gulp-rev-append"),
    // sass = require("gulp-sass"),
    uglify = require("gulp-uglify");
    imageminPngcrush = require("imagemin-pngcrush");

var pluginJsUrl = [
    "./public/static/front/js/jquery/jquery-2.1.1.min.js",
    "./public/static/front/js/plugins/jquery-ui/jquery-ui.js",
    "./public/static/front/js/bootstrap/bootstrap.min.js",
    "./public/static/front/js/kindeditor/kindeditor-all.js",
    "./public/static/front/js/kindeditor/lang/zh-CN.js",
    "./public/static/front/js/plugins/metisMenu/jquery.metisMenu.js",
    "./public/static/front/js/plugins/slimscroll/jquery.slimscroll.min.js",
    "./public/static/front/js/plugins/pace/pace.min.js",
    "./public/static/front/js/inspinia.js",
    "./public/static/front/js/angular/angular.min.js",
    "./public/static/front/js/plugins/oclazyload/dist/ocLazyLoad.min.js",
    "./public/static/front/js/ui-router/angular-ui-router.min.js",
    "./public/static/front/js/bootstrap/ui-bootstrap-tpls-1.1.2.min.js",
    "./public/static/front/js/gVerify.js",
    "./public/static/front/js/laydate/laydate.js"
]
var cssMinUrl = [
    './public/static/front/font-awesome/css/font-awesome.css',
    './public/static/front/font-awesome/css/bootstrap.min.css',
    './public/static/front/font-awesome/css/animate.css',
    './public/static/front/font-awesome/css/style.css',
    './public/static/front/font-awesome/js/kindeditor/themes/default/default.css',
]
gulp.task("ngJs", function(){
    return gulp.src(['./public/static/front/js/app.js', './public/static/front/js/config.js', './public/static/front/js/directives.js', './public/static/front/js/controllers.js', './public/static/front/js/service.js'])
        .pipe(concat("all.js"))
        .pipe(ngAnnotate())
        .pipe(ngmin({dynamic: false}))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/static/front/js'))
        .pipe(notify({message: 'js task ok'}));
});
gulp.task("pluginJs", function(){
    return gulp.src(pluginJsUrl)
        .pipe(concat('normal.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/static/front/js'))
        .pipe(notify({message: 'js task ok'}));
});
gulp.task("allCss", function(){
    return gulp.src(cssMinUrl)
        .pipe(concat("all.min.css"))
        .pipe(minify())
        .pipe(gulp.dest("./public/static/front/css"))
        .pipe(notify({message: 'css task ok'}));
})

gulp.task("default", function(){
    gulp.run('allCss');
    //...
})