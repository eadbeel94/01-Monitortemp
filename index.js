const express = require('express');
const path = require('path');
// Initializations
const app = express();
// settings
app.set('port', process.env.PORT || 3001);
// middlewares
app.use(express.json());
// routes 
//app.use('/', require('./routes/main.js'));
// static files
app.use(express.static(path.join(__dirname, '/public')));
// start the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});