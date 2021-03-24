//adding dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//dotenv dep config
require('dotenv').config();

//call express function with variable name app
const app = express();
//adding port number to port variable
const port = process.env.PORT || 5000;

 
app.use(cors());
app.use(express.json());

// connecting to mongoose
//below line, creating variable named uri and bringing data from .env folder with "process.env.ATLAS_URI" 
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
//putting db in a variable with variable name connection
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});