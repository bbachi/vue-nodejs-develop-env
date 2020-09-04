const express = require('express');
const path = require('path');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

// place holder for the data
const users = [];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+ '/my-app/build'));

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding use:::::::::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+ '/my-app/build/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});