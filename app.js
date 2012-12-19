
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser({
    keepExtensions: true
    , uploadDir : __dirname + '/public/uploads'
  }));
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var database = {};
var prefix = __dirname + '\\public\\uploads\\';

app.get('/', routes.index);
app.get('/create', function(req, res, next){
  res.render('create', {
    database : database
  });
});
app.get('/trip',  function(req, res, next){
  res.render('trip')
});
app.post('/upload', function(req, res, next) {
    //if(!req.body.title) throw new Error('no title');
    database[req.files.file.path.replace(prefix, '')] = {
        title : req.body.title
    };
    console.log(database);
    res.redirect('/create');
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
