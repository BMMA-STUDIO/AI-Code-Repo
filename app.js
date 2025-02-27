const express = require('express');

// Create an express application
const app = express();

//View engine
app.set('view engine', 'ejs')

//public folder
app.use(express.static('public'));

// Define the port number local
const port = process.env.PORT || 3000;

// GET routes --------------------------------------->
//Index
app.get('/', (req, res) => {
    res.render('index');
    console.log("Running Index")
});


//404 View
app.get('/404', (req, res) => {
    res.render('404', {title: '404'});
    console.log("Running 404")

});

//Campaigns Route
app.get('/campaigns', (req, res) => {
    res.render('campaigns', {title: 'Current Campaigns'});
    console.log("Campaigns")

});

//About Company Route
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
    console.log("About")
});

//Renewals Company Route
app.get('/renewals', (req, res) => {
    res.render('renewals', {title: 'Upcoming Renewals'});
    console.log("Renewals")
});

//User Route
app.get('/user', (req, res) => {
    res.render('user', {title: 'User Profile'});
    console.log("User Profile")
});

app.get('/lounge', (req, res) => {
    res.render('lounge', {title: 'Lounge'});
    console.log("In the Lounge")
});

app.get('/community', (req, res) => {
    res.render('community', {title: 'Community'});
    console.log("Community Profile")
});

//POST Routes
app.get('/signup', (req, res) => {
    res.render('signup', {title: 'Sign Up'});
    console.log("User Signup")
}); //--CHANGE TO POST BEFORE TESTING---//

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});