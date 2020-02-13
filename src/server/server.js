const express = require('express');
const app = express();

//Initializing main project folder
app.use(express.static('dist'));

//Server setup
app.listen(3000, () => { 
  console.log('Server running on http://localhost:3000/'); 
});

//ROUTES
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/about', function (req, res) {
  res.sendFile('/dist/about.html', { root: __dirname + '/../..' })
})