
//handlebars -hbs

//express - third party module--
//npm i express--
const path = require('path');//It is third party which is used  for css
const hbs = require('hbs');
const express =require('express');
const app = express();


const publicDirectory = path.join(__dirname, "MyFile");
app.use(express.static(publicDirectory));


app.set('view engine', 'hbs');////we are using hbs as templates...(yo images dynamic ko lagi ho )

const partials = path.join(__dirname, 'views/partials')
hbs.registerPartials(partials);


app.get('/contact', function(req, res){
    const temp ="50"

    res.render('contact') //render only send varibale and text
})

app.get('/elements', function(req, res){
    

    res.render('elements') //render only send varibale and text
})

app.get('/index', function(req, res){
    const temp ="50"

    res.render('index') //render only send varibale and text
})




app.get('/', function(req, res){
    

    res.render('index') //render only send varibale and text
})



/*app.get('/contact', function(req, res){

    res.send("Hello world !!");
})*/


/*app.get('/about', function(req, res){

    res.sendFile(__dirname +"/about.html");
})


app.get('/', function(req, res){

    res.sendFile(__dirname +"/home.html");
})

/*app.get('/user/:batch/:student/:id',function(req,res){
    const s = req.params.student;
    const b = req.params.batch;
    const i = req.params.id;

    res.send( "Hello" + s + "You are from" + b + "And your id is" + i);
   
})*/

/*app.get('/help', function(req, res){

    res.sendFile(__dirname +'/help.html');
})*/

/*app.get('/Gallery', function(req, res){

    res.sendFile(__dirname +'/Gallery.html');
})*/


app.listen(90)