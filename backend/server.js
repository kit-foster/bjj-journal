const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

// Setup express app
const app = express();

app.use(
    cors(),
    bodyParser.urlencoded({
        extended: false
    })
);

app.use(bodyParser.json());

// Configure Mongo
const db = 'mongodb://127.0.0.1:27017/bjj-journal';

// Connect to Mongo with Mongoose
mongoose
    .connect(
        db, 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    )
    .then(() => console.log("Mongo connected"))
    .catch(err => console.log(err));

// Specify the Port where the backend server can be accessed and start listening on that port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}.`));

// Directs server to use the schemas
const journalRouter = require('./routes/journal');
const userRouter = require('./routes/user');

app.use('/journal', journalRouter);
app.use('/user', userRouter);