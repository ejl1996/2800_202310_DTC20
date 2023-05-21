// This code was modified from Emma Lee's COMP 2537 Assignment 2.

// Import required modules
require("./utils.js");
require('dotenv').config();

// Import express
const express = require('express');
// Import express-session                 
const session = require('express-session');
// Import ObjectId from connect-mongo   
const ObjectId = require('mongodb').ObjectId;
// Import connect-mongo       
const MongoStore = require('connect-mongo');
// Import mongodb    
const { MongoClient } = require('mongodb');
// Create an express application       
const app = express();
// Import bcrypt                         
const bcrypt = require('bcrypt');
// Set saltRounds to 12              
const saltRounds = 12;
// Import url 
const url = require('url');
// Import JOI 
const Joi = require("joi");
// Set localhost to 4000
const port = process.env.PORT || 4000;

// Set expiration time for session to 1 hour 
const expireTime = 1 * 60 * 60 * 1000;

// Secret Information Section 
const mongodb_host = process.env.MONGODB_HOST;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_password = process.env.MONGODB_PASSWORD;
const mongodb_database = process.env.MONGODB_DATABASE;
const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;
// End Secret Information Section 

// Our MongoURL
const mongoURL = `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/test`;

console.log(mongodb_password)
console.log(mongodb_user)
const node_session_secret = process.env.NODE_SESSION_SECRET;

var { database } = include('databaseConnection');

// Display message if there is error in connection 
MongoClient.connect(mongoURL, (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }
});

// Set userCollection to mongodb collection 
const userCollection = database.db(mongodb_database).collection('users');

// Set view engine to EJS
app.set('view engine', 'ejs');

// Req.body required to parse (app.post) ex. req.body.username
app.use(express.urlencoded({ extended: false }));

// Set static files to public folder 
app.use(express.static('./public'));

// Initially was session, now /test in mongoURL
var mongoStore = MongoStore.create({
    mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/test`,
    // mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@${mongodb_host}/test`,
    crypto: {
        secret: mongodb_session_secret
    }
})

// Handle cookies. Ex. req.session.cookies (would have to parse cookies otherwise).  
app.use(session({
    secret: node_session_secret,
    store: mongoStore, //default is memory store 
    saveUninitialized: false,
    resave: true
}));

// Session authentication 
function isValidSession(req) {
    if (req.session.authenticated) {
        return true;
    }
    return false;
}

// Session validation
function sessionValidation(req, res, next) {
    // If valid session call next action
    if (isValidSession(req)) {
        next();
    }
    // Otherwise don't render and redirect to login
    else {
        res.redirect("login.ejs");
    }
}

// Login post route
app.post('/login', async (req, res) => {
    var username = req.body.username;
    var password = req.body.password;

    const schema = Joi.string().max(20).required();
    const validationResult = schema.validate(username);
    if (validationResult.error != null) {
        console.log(validationResult.error);
        res.redirect("/login");
        return;
    }

    const result = await userCollection.find({ username: username }).project({ username: 1, password: 1, _id: 1 }).toArray();

    console.log(result);
    console.log("CHECKPOINT");
    if (result.length != 1) {
        res.send("User Not Found" + "<br>" + '<a href="/login">Try again</a>');;
        return;
    }
    else if (await bcrypt.compare(password, result[0].password)) {
        console.log("correct password");
        req.session.authenticated = true;
        req.session.username = username;
        req.session.cookie.maxAge = expireTime;

        res.redirect('/home');
        return;
    }
    else {
        res.send("Incorrect Password" + "<br>" + '<a href="/login">Try again</a>');
        return;
    }
});

app.get('/', (req, res) => {
    console.log(req.url);
    console.log(url.parse(req.url));
    res.render("login");
});

app.get('/login', (req, res) => {
    res.render('login');
});

// Post route for MMSE questions starting from page 1 to 8 
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

// Post route for mmse2 
app.post('/mmse2', (req, res) => {
    const { image, weekday } = req.body;

    const scoringSystem = [
        { question: 'image', correctAnswer: 'Wristwatch', score: 1 },
        { question: 'weekday', correctAnswer: 'Saturday', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse2Score = score;
    console.log(req.session.mmse2Score)

    res.render('mmse3');
});

// Post route for mmse3 
app.post('/mmse3', (req, res) => {
    const { ball, subject } = req.body;

    const scoringSystem = [
        { question: 'ball', correctAnswer: 'Basketball', score: 1 },
        { question: 'subject', correctAnswer: 'Bracelet', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse3Score = score;
    console.log(req.session.mmse3Score)

    res.render('mmse4');
});

// Post route for mmse4 
app.post('/mmse4', (req, res) => {
    const { ethnic, algebra } = req.body;

    const scoringSystem = [
        { question: 'ethnic', correctAnswer: 'French', score: 1 },
        { question: 'algebra', correctAnswer: '20', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse4Score = score;
    console.log(req.session.mmse4Score)

    res.render('mmse5');
});

// Post route for mmse5 
app.post('/mmse5', (req, res) => {
    const { spelling, order } = req.body;

    const scoringSystem = [
        { question: 'spelling', correctAnswer: 'zucchini', score: 1 },
        { question: 'order', correctAnswer: 'pin, computer, house, Jupiter', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse5Score = score;
    console.log(req.session.mmse5Score)

    res.render('mmse6');
});

// Post route for mmse46
app.post('/mmse6', (req, res) => {
    const { multiples, math } = req.body;

    const scoringSystem = [
        { question: 'multiples', correctAnswer: '15, 30, 55, 70', score: 1 },
        { question: 'math', correctAnswer: '100', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse6Score = score;
    console.log(req.session.mmse6Score)

    res.render('mmse7');
});

// Post route for mmse7 
app.post('/mmse7', (req, res) => {
    const { date, recipe } = req.body;

    const scoringSystem = [
        { question: 'date', correctAnswer: 'There are 12 months in a year.', score: 1 },
        { question: 'recipe', correctAnswer: 'Drive out of parking lot.', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse7Score = score;
    console.log(req.session.mmse7Score)

    res.render('mmse8');
});

// Post route for mmse8 
app.post('/mmse8', (req, res) => {
    const { cost, grammar } = req.body;

    const scoringSystem = [
        { question: 'cost', correctAnswer: '100 cents', score: 1 },
        { question: 'grammar', correctAnswer: 'I went to the store tomorrow.', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse8Score = score;
    console.log(req.session.mmse8Score)

    res.render('mmse9');
});

// Post route for mmse9
app.post('/mmse9', (req, res) => {
    const { smoke, exercise } = req.body;

    const scoringSystem = [
        { question: 'smoke', correctAnswer: 'No', score: 1 },
        { question: 'exercise', correctAnswer: 'Yes', score: 1 },
    ];

    let score = 0;
    scoringSystem.forEach(item => {
        if (req.body[item.question] === item.correctAnswer) {
            score += item.score;
        }
    });

    req.session.mmse9Score = score;
    console.log(req.session.mmse9Score)

    res.render('mmse10');
});

// Post route for mmse10 
app.post('/mmse10', (req, res) => {
    const { diabetes, income } = req.body;

    const scoringSystem = [
        { question: 'diabetes', correctAnswer: 'No', score: 1 },
        { question: 'income', correctAnswer: 'Yes', score: 1 },
    ];

    let totalScore =
        (req.session.mmse1Score) +
        (req.session.mmse2Score) +
        (req.session.mmse4Score) +
        (req.session.mmse5Score) +
        (req.session.mmse6Score) +
        (req.session.mmse9Score);
    console.log(totalScore);
    totalScore += 14;

    req.session.totalScore = totalScore;

    res.render('score', { totalScore: totalScore });
});

// Post route for recommendation based on totalScore
// Score reference points calculated from Kaggle: data_demented.js and data_nondemented.js
app.post('/recommendation', (req, res) => {
    const totalScore = req.session.totalScore; //total score from session 

    let recommendation;
    if (totalScore <= 17) {
        recommendation = "are at risk";
    } else if (totalScore === 18) {
        recommendation = "may be at risk";
    } else {
        recommendation = "are not at risk";
    }
    console.log(recommendation)
    req.session.recommendation = recommendation;
    res.render('recommendation', { recommendation: recommendation });
});

// Post route for /signup using JOI validation 
app.post('/signup', async (req, res) => {
    const { username, email, password, number } = req.body;
    console.log(username);
    console.log(email);

    // validate the input style for username, email and password using Joi
    const schema = Joi.object({
        username: Joi.string().alphanum().max(20).required(),
        email: Joi.string().max(254).required(),
        password: Joi.string().alphanum().max(20).required(),
        number: Joi.number().integer().max(999999999999999).required(),
    });

    // validate the input
    const validationResult = schema.validate({ username, email, password, number });
    if (validationResult.error != null) {
        console.log(validationResult.error);
        // Render the sign-up form with error messages
        return res.render('signup', { error: validationResult.error.details[0].message });
    }

    try {
        // Password encryption
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        //console.log(hashedPassword);

        // Insert user into the database
        const result = await userCollection.insertOne({
            username: username,
            email: email,
            password: hashedPassword,
            number: number,
        });
        //console.log(result);

        const x = await userCollection.findOne({ "username": username })
        console.log(x);
        const y = await userCollection.findOne({ "email": email })
        console.log(y);

        res.redirect('/login');

    } catch (error) {
        console.error(error);
        // Handle the error appropriately, e.g., render an error page or redirect to a specific route
        res.redirect('/login');
    }
});

// Post route for updating password in mongodb 
app.post('/updatepassword', async (req, res) => {
    console.log("Need this to show up or this route is not being hit.");
    try {
        const userCollection = database.db(mongodb_database).collection('users'); // Use the correct database connection
        console.log("Collection:", userCollection);

        const filter = { username: req.body.username };
        console.log("Filter:", filter);

        const user = await userCollection.findOne(filter);
        console.log("User:", user);

        if (!user) {
            console.log('No user found.');
            return res.status(404).json({ message: 'User not found' });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds); // Use async bcrypt function
        const update = {
            $set: { password: hashedPassword },
        };
        console.log("Update:", update);

        console.log("Updating document...");
        const result = await userCollection.updateOne(filter, update);
        console.log("Update Result:", result);

        if (result.modifiedCount === 1) {
            console.log('Successfully updated password.');
            res.render("home.ejs");
            //res.status(200).json({ message: 'Password updated successfully' });
        } else {
            console.log('No document matched the filter.');
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating password in MongoDB:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Post route for updating number in mongodb
app.post('/updatenumber', async (req, res) => {
    console.log("Need this to show up or this route is not being hit.");
    try {
        const userCollection = await database.db(mongodb_database).collection('users'); // Use the correct database connection
        console.log("Collection:", userCollection);

        const filter = { username: req.body.username };
        console.log("Filter:", filter);

        const user = await userCollection.findOne(filter);
        console.log("User:", user);

        if (!user) {
            console.log('No user found.');
            return res.status(404).json({ message: 'User not found' });
        }
        const newNumber = req.body.number;
        const update = {
            $set: { number: req.body.number },
        };
        console.log("Update:", update);

        console.log("Updating document...");
        const result = await userCollection.updateOne(filter, update);
        console.log("Update Result:", result);

        if (result.modifiedCount === 1) {
            console.log('Successfully updated number.');
            res.render("home.ejs");

        } else {
            console.log('No document matched the filter.');
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating number in MongoDB:', error);
        return res.status(500).json({ message: 'Server error' });
    }
});


app.get('/fetchProfile', sessionValidation, async (req, res) => {
    try {
        const user = await userCollection.findOne({ username: req.session.username }, { projection: { name: 1, username: 1, email: 1, number: 1 } });
        res.json({ user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/profile', sessionValidation, async (req, res) => {
    try {
        const user = await userCollection.findOne({ username: req.session.username }, { projection: { username: 1, email: 1, number: 1 } });
        res.render('profile', { user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error...!' });
    }
});

app.get('/password', async (req, res) => {
    try {
        const user = await userCollection.findOne({ username: req.session.username }, { projection: { username: 1, email: 1, number: 1 } });
        res.render('password', { user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error...!' });
    }
});

app.get('/email', (req, res) => {
    res.render('email');
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

app.get('/score', (req, res) => {
    res.render('score');
});

app.get('/revise', (req, res) => {
    res.render('revise');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/thankyou', (req, res) => {
    res.render('thankyou');
});

app.get('/password', (req, res) => {
    res.render('password', { user });
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/profile', (req, res) => {
    res.render('profile');
});

app.get('/questions', (req, res) => {
    res.render('questions');
});

app.get('/number', (req, res) => {
    const user = userCollection.findOne({ username: req.session.username }, { projection: { username: 1, email: 1, number: 1 } });
    res.render('number', { user });
});

app.get('/recommendation', (req, res) => {
    const recommendation = req.session.recommendation;
    res.render('recommendation', { recommendation: recommendation });
});

app.get('/logout', (req, res) => {
    res.render('logout');
});

app.get('/logoutuser', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.get('/submitthanks', (req, res) => {
    req.session.destroy();
    res.redirect('/submitthanks');
});

app.get("*", (req, res) => {
    res.status(404).render("404.ejs");
});

app.listen(port, () => {
    console.log("Node application listening on port " + port);
});