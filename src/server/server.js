const express = require('express');
const app = express();

//Initializing main project folder
app.use(express.static('dist'));




//Server setup

const port = process.env.PORT || 3000;

app.listen(port, () => { 
  console.log('Server running'); 
});

//ROUTES
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/about', function (req, res) {
  res.sendFile('/dist/about.html', { root: __dirname + '/../..' })
})