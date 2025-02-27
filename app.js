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
    res.send("Profile About Company + LinkedIn Link");
    console.log("Campaigns")

});


// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});