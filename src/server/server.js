const express = require('express');
const app = express();

//Initializing main project folder
app.use(express.static('src/client'));

//Server setup
app.listen(3000, () => { 
  console.log('Server running on http://localhost:3000/'); 
});

//ROUTES
app.get('/', function (req, res) {
    res.sendFile('/client/views/index.html', { root: __dirname + '/..' })
})

app.get('/about', function (req, res) {
    res.sendFile('/client/views/html/about.html', { root: __dirname + '/..' })
})