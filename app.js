const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(cors());
app.use(
    express.urlencoded({
        extended: true, 
    })
);

// Parse incoming JSON requests
app.use(express.json());

module.exports = app;