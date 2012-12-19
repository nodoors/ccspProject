var mongoose = require('mongoose');

var man = new mongoose.Schema({
	ID : {type : String, required : true}
   ,head : {type : Array}
});

var article = new mongoose.Schema({
	ID : {type : String, required : true}
   ,content : {type : String}
   ,imgs : {type : Array}
   ,location : {type : Array}
   ,start : {type : String}
   ,end : {type : String}
});

var comment = new mongoose.Schema({
	ID : {type : String, required : true}
   ,article_id : {type : String, required : true}
   ,content : {type : String, required : true}
   ,time : {type : String, required : true}
});


var Man = mongoose.model('Man', man);
var Article = mongoose.model('Article', article);
var Comment = mongoose.model('Comment', comment);

module.exports = Man;
module.exports = Article;
module.exports = Comment;


var x = new Man();
var y = new Article();
var z = new Comment();