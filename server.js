var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
   'article-one' : {
  
    title: 'Article one Rohit Mittal',
    heading:'Article One',
    date:'Sept 28,2016',
    content: ` <p>
                This is the content for my first article.This is the content for my first article.
                This is the content for my first article.This is the content for my first article.
                This is the content for my first article.This is the content for my first article.
             </p>
             <p>
                This is the content for my first article.This is the content for my first article.
                This is the content for my first article.This is the content for my first article.
                This is the content for my first article.This is the content for my first article.
             </p> `
             
      },
    'article-two' : {
      title: 'Article Two Rohit Mittal',
      heading:'Article Two',
      date:'Sept 27,2016',
      content: ` <p>
                This is the content for my second article.This is the content for my second article.
                This is the content for my second article.This is the content for my second article.
                This is the content for my second article.This is the content for my second article.
             </p>
             <p>
                This is the content for my second article.This is the content for my second article.
                This is the content for my second article.This is the content for my second article.
                This is the content for my second article.This is the content for my second article.
             </p> `
            
    },
   'article-three' : {
        title: 'Article Three Rohit Mittal',
      heading:'Article Three',
      date:'Sept 26,2016',
      content: ` <p>
                This is the content for my third article.This is the content for my third article.
                This is the content for my third article.This is the content for my third article.
                This is the content for my third article.This is the content for my third article.
              </p>
             <p>
                This is the content for my third article.This is the content for my third article.
                This is the content for my third article.This is the content for my third article.
                This is the content for my third article.This is the content for my third article.
             </p>`
            
    }
};
    function createTemplate(data){
        var title=data.title;
        var date=data.date;
        var heading=data.heading;
        var content=data.content;
    
var htmlTemplate = `

<html>
    <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/">Home</a>
            </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
    </div>
    </body>
</html>
 `;
 return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function (req,res)
{
    counter = counter + 1;
    res.send(counter.toString());
});

var names=[];
app.get ('/submit-name', function(req,res) // URL: /submit-name?name=xxxxx
{
//Get the name from the request
var name = req.query.name; //TODO
names.push(name);
//JSON: Javascript Object Notation

res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req, res) {
//articleName == article-one
//articles[articleName] == {} content object for article one
var articleName = req.params.articleName;
res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
