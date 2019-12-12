const express = require('express');
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static('public'));

const port = 3000;

app.listen(port, console.log(`Server running on port: ${port}`));