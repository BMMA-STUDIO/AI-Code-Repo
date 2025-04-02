const express = require('express');

// Create an express application
const app = express();

//Parse form
app.use(express.urlencoded({ extended: true }));

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

app.get('/beema', (req, res) => {
    res.render('beema');
    console.log("Running Beema")
});

app.get('/xSearch', (req, res) => {
    res.render('xSearch');
    console.log("Running xSearch")
});


//404 View
app.get('/404', (req, res) => {
    res.render('404', {title: '404'});
    console.log("Running 404")
});

app.get('/alert', (req, res) => {
    res.render('alert', {title: 'Alert'});
    console.log("Running Alert")
});

//Campaigns Route
app.get('/campaigns', (req, res) => {
    res.render('campaigns', {title: 'Current Campaigns'});
    console.log("Campaigns")

});

app.get('/campaignProfile', (req, res) => {
    res.render('campaignProfile', {title: 'Campaign Name'});
    console.log("Campaign Name")

});


//About Company Route
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
    console.log("About")
});

//Renewals Company Route
app.get('/renewals', (req, res) => {
    res.render('renewals', {title: 'Upcoming Renewals: Login'});
    console.log("Renewals Login")
});

app.get('/renewalsList', (req, res) => {
    res.render('renewalsList', {title: 'Upcoming Renewals'});
    console.log("Renewals List")
});



//Capos and Lounges
app.get('/invite', (req, res) => {
    res.render('invite', {title: 'Lounge Invite'});
    console.log("You are invited")
});
app.get('/loungeFeed', (req, res) => {
    res.render('loungeFeed', {title: 'Lounge Feed'});
    console.log("In the Lounge Feed")
});

//Communities
app.get('/community', (req, res) => {
    res.render('community', {title: 'Community'});
    console.log("Community Profile")
});

app.get('/communityList', (req, res) => {
    res.render('communityList', {title: 'Community Groups'});
    console.log("Community List")
});

app.get('/community/signup', (req, res) => {
    res.render('signup', {title: 'Create Community'});
    console.log("Community Created")
});

//CarriersAPI USE res.json()
app.get('/carrier', (req, res) => {
    res.render('carrier', {title: 'API'});
    console.log("API")
});

//Agents
app.get('/agent', (req, res) => {
    res.render('agent', {title: 'Agent Profile'});
    console.log("Agent Profile")
});

app.get('/agentList', (req, res) => {
    res.render('agentList', {title: 'Agent List'});
    console.log("Agent List")
});

app.get('/agentsListLoggedIn', (req, res) => {
    res.render('agentsListLoggedIn', {title: 'Agent List LoggedIn'});
    console.log("Agent List Logged In")
});

//POST Routes
app.get('/signup', (req, res) => {
    res.render('signup', {title: 'Sign Up'});
    console.log("User Signup")
}); //--CHANGE TO POST BEFORE DB TESTING---//

//XFORM Section
app.get('/xForm', (req, res) => {
    res.render('xForm', { submitted: false });
});


app.post('/submit', (req, res) => {
    const { textInput, dateInput } = req.body;
    // Render the same form with submitted data
    res.render('submit', { 
        submitted: true,
        textInput: textInput,
        dateInput: dateInput 
    });
    console.log(req.body)
});

//User Route
app.get('/user', (req, res) => {
    res.render('user', {
        title: 'User Profile',
         //textInput: textInput,
          //dateInput: dateInput
      });
      console.log("User Profile")
  });

//Payout
app.get('/payout', (req, res) => {
    res.render('payout', {title: 'Payout Request'});
    console.log("Payout Authorised")
}); //--CHANGE TO POST BEFORE DB TESTING---//


app.get('/search', (req, res) => {
    res.render('search', {title: 'Search'});
    console.log("Search Query")
}); //--CHANGE TO POST BEFORE DB TESTING---//


//Error handler
app.use((req, res) => {
    res.status(404).render("404");
});

// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});