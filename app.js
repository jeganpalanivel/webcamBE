const cors = require("cors")
const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../webcamIntegration-backend/modal/user');


//To load env variables
require ("dotenv").config();


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Database connected successfully!');
    })
    .catch((err) => {
      console.error('Error connecting to the database', err);
      process.exit(1); 
    });


//initate express server
const app = express();

//adding middleware to server
app.use(bodyParser.json());
// app.use(expressValidator()); 
app.use(cors());

// Include your routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);

//routes
app.get("/",(req,res)=>{
    res.send("User Details");
});


//To connect server
const port = process.env.PORT || 8000


app.listen(port, () => console.log(`Listening on ${port}`));