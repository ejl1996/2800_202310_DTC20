//This code was modified from Emma Lee's COMP 2537 Assignment 2 

require("./utils.js");

const url = require('url');

require('dotenv').config();
const express = require('express');
const session = require('express-session');
const ObjectId = require('mongodb').ObjectId;
const MongoStore = require('connect-mongo');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const saltRounds = 12;
const port = process.env.PORT || 4000;

const app = express();

const Joi = require("joi");
const expireTime = 60 * 60 * 1000;

/* secret information section */
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;

const mongoURL = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/test`;

console.log(mongodb_password)
console.log(mongodb_user)
const node_session_secret = process.env.NODE_SESSION_SECRET;
/* END secret section */

var { database } = include('databaseConnection');

MongoClient.connect(mongoURL, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    const database = client.db(mongodb_database);
    // Continue with your code that depends on the database connection
});


const userCollection = database.db(mongodb_database).collection('users');

app.set('view engine', 'ejs');

//req.body need this to parse (app.post) ex. req.body.username
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));

// initially was /session, now /test in mongoURL
var mongoStore = MongoStore.create({
    mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/test`,
    // mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/test`,
    crypto: {
        secret: mongodb_session_secret
    }
})

//handles cookies. Ex. req.session.cookies. **would have to parse cookies ourselves otherwise.  
app.use(session({
    secret: node_session_secret,
    store: mongoStore, //default is memory store 
    saveUninitialized: false,
    resave: true
}
));

//AUTHENTICATION
function isValidSession(req) {
    if (req.session.authenticated) {
        return true;
    }
    return false;
}

//session validation
function sessionValidation(req, res, next) {
    //if valid session call next action
    if (isValidSession(req)) {
        next();
    }
    //otherwise don't render and redirect to login
    else {
        res.redirect("login.ejs");
    }
}

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(url.parse(req.url));
    res.render("login");
});

app.post('/mmse1', (req, res) => {
    // Extract the question data from the request body
    const { year, country } = req.body;

    // Scoring system for mmse1
    const scoringSystem = [
        { question: 'year', correctAnswer: '2023', score: 1 },
        { question: 'country', correctAnswer: 'Canada', score: 1 },
    ];


    // Calculate the score for mmse1
    let score = 0;
    scoringSystem.forEach(item => {

        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    // Store the score for mmse1 in session
    req.session.mmse1Score = score;
    console.log(req.session.mmse1Score)

    res.render('mmse2');
});

app.post('/mmse2', (req, res) => {
    // Extract the question data from the request body
    const { image, weekday } = req.body;

    // Scoring system for mmse2
    const scoringSystem = [
        { question: 'image', correctAnswer: 'Wristwatch', score: 1 },
        { question: 'weekday', correctAnswer: 'Saturday', score: 1 },
    ];

    // Calculate the score for mmse2
    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    // Store the score for mmse2 in session
    req.session.mmse2Score = score;
    console.log(req.session.mmse2Score)

    res.render('mmse3');
});

app.post('/mmse3', (req, res) => {
    // Extract the question data from the request body
    const { ball, subject } = req.body;

    // Scoring system for mmse3
    const scoringSystem = [
        { question: 'ball', correctAnswer: 'Basketball', score: 1 },
        { question: 'subject', correctAnswer: 'Bracelet', score: 1 },
    ];

    // Calculate the score for mmse3
    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    // Store the score for mmse3 in session
    req.session.mmse3Score = score;
    console.log(req.session.mmse3Score)

    res.render('mmse4');
});

app.post('/mmse4', (req, res) => {
    // Extract the question data from the request body
    const { ethnic, algebra } = req.body;

    // Scoring system for mmse4
    const scoringSystem = [
        { question: 'ethnic', correctAnswer: 'French', score: 1 },
        { question: 'algebra', correctAnswer: '20', score: 1 },
    ];

    // Calculate the score for mmse4
    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    // Store the score for mmse4 in session
    req.session.mmse4Score = score;
    console.log(req.session.mmse4Score)

    res.render('mmse5');
});

app.post('/mmse5', (req, res) => {
    // Extract the question data from the request body
    const { spelling, order } = req.body;

    // Scoring system for mmse5
    const scoringSystem = [
        { question: 'spelling', correctAnswer: 'zucchini', score: 1 },
        { question: 'order', correctAnswer: 'pin, computer, house, Jupiter', score: 1 },
    ];

    // Calculate the score for mmse5
    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    // Store the score for mmse5 in session
    req.session.mmse5Score = score;
    console.log(req.session.mmse5Score)

    res.render('mmse6');
});

app.post('/mmse6', (req, res) => {
    // Extract the question data from the request body
    const { multiples, math } = req.body;

    // Scoring system for mmse6
    const scoringSystem = [
        { question: 'multiples', correctAnswer: '15, 30, 55, 70', score: 1 },
        { question: 'math', correctAnswer: '100', score: 1 },
    ];

    // Calculate the score for mmse6
    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    // Store the score for mmse6 in session
    req.session.mmse6Score = score;
    console.log(req.session.mmse6Score)

    res.render('mmse7');
});

app.post('/mmse7', (req, res) => {
    // Extract the question data from the request body
    const { date, recipe } = req.body;

    // Scoring system for mmse7
    const scoringSystem = [
        { question: 'date', correctAnswer: 'There are 12 months in a year.', score: 1 },
        { question: 'recipe', correctAnswer: 'Drive out of parking lot.', score: 1 },
    ];

    // Calculate the score for mmse7
    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    // Store the score for mmse7 in session
    req.session.mmse7Score = score;
    console.log(req.session.mmse7Score)

    res.render('mmse8');
});

app.post('/mmse8', (req, res) => {

    // Extract the question data from the request body
    const { cost } = req.body;

    // Scoring system for mmse7
    const scoringSystem = [
        { question: 'cost', correctAnswer: '100 cents', score: 1 },
    ];

    // Calculate the total score
    let totalScore =
        req.session.mmse1Score +
        req.session.mmse2Score +
        req.session.mmse3Score +
        req.session.mmse4Score +
        req.session.mmse5Score +
        req.session.mmse6Score +
        req.session.mmse7Score +
        req.session.mmse8Score;
    totalScore += 9;
    console.log(totalScore)

    res.render('score', { totalScore: totalScore });
});

app.get('/mmse1', (req, res) => {
    res.render('mmse1');
});

app.get('/mmse2', (req, res) => {
    res.render('mmse2');
});

app.get('/mmse3', (req, res) => {
    res.render('mmse3');
});

app.get('/mmse4', (req, res) => {
    res.render('mmse4');
});

app.get('/mmse5', (req, res) => {
    res.render('mmse5');
});

app.get('/mmse6', (req, res) => {
    res.render('mmse6');
});

app.get('/mmse7', (req, res) => {
    res.render('mmse7');
});

app.get('/mmse8', (req, res) => {
    res.render('mmse8');
});

app.get('/logout', (req, res) => {
    res.render('logout');
});

app.get('/logoutuser', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(port, () => {
    console.log("Node application listening on port " + port);
});