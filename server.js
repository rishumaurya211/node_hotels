const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body to store data

const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
    res.send('Welcome to My Hotel')
})


// for menu item schema and db connection


// Import the router files
const peronRoutes = require('./routes/personRoute');
const MenuitemRoute = require('./routes/menuitemRoute');
const MenuItem = require('./models/MenuItem');

// Use the routers
app.use('/person', peronRoutes);
app.use('/Menu', MenuitemRoute)

app.listen(PORT, () => {
    console.log("listening on port 3000");
})











// app.get('/paneer', (req, res) => {
//     res.send('sure sir ,i would love to server paneer')
// })

// app.get('/idle', (req, res) => {
//     res.send('sure sir ,i would love to server idle')
// })
// app.post('/items', (req, res) => {
//     console.log("Data is send");
// })