const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const path = require('path');

// Configure express-handlebars
app.engine('handlebars', engine({
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'views/test'),
    // changing partials folder below
    // partialsDir: 'views/newNameOfTheFolder'
    // or
    // partialDir: path.join(__dirname, 'views/newNameOfTheFolder),
    // changing extenstion name from handlebars to something different
    // extname: 'accime'
}));
app.set('view engine', 'handlebars');
// app.set('views', './views');

// Routing
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page', 
        name: 'Dachi',
        age: 25,
        isDisplayNamed: true,
        isAgeEnabled: true
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    });
});

app.get('/dashboard', (req,res) => {
    res.render('dashboard', {
        isListEnable: false
    })
})

app.get('/each/helper', (req,res) => {
    res.render('contact', {
        people: [
            "James",
            'Peter',
            'Sadrack',
            'Morissa'
        ],
        user: {
            username: 'acc',
            age: 20,
            phone: 555555
        },
        lists: [
            {
                items: ['Mango', 'Banana', 'Pineapple']
            },
            {
                items: ['Potato', 'Manioc', 'Avocado']
            }
        ]
    });
});

app.get('/look', (req,res) => {

    res.render('lookup', {
        user: {
            username: 'test123',
            age: 20,
            phone: 555555
        },
        people: [
            'James',
            'Peter',
            'Sadrack',
            'Morissa'
        ]
    })
})

app.listen(8080, () => {
    console.log('Server is starting at port', 8080);
});