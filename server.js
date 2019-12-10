const express = require('express');
const parser = require('body-parser');
const path = require('path');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('public'));


const port = 3000;

app.listen(port, console.log(`Server running on port: ${port}`));
