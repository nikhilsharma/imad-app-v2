var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles = {
    'article-one' : {
        title:'Article One | Nikhil Sharma',
          heading:'Article One',
          date:'Feb 19th 2017',
          content: `<p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                    </p>
                    <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                    </p>
                    <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
                    </p>`
    },
    
    'article-two' : {
        title:'Article Two | Nikhil Sharma',
          heading:'Article Two',
          date:'Feb 20th 2017',
          content: `<p>
                    This is the content for my article. 
                    </p>
                    `
    },
    
    'article-three' : {
        title:'Article Three | Nikhil Sharma',
          heading:'Article Three',
          date:'Feb 19th 2017',
          content: `<p>
                    This is the content for my article.
                    </p>
                    `
    }
};



function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = 
    `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <style>
           
        </style>
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
    </body>
</html>
    `;
    return htmlTemplate;
}


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req, res) {
    // articleName == article-one
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
