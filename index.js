require('dotenv').config()
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.DB_URL).then((result) => {
    console.log('Connect to database successfully');
}).catch((err) => {
    console.log(`Error connect database ${err}`);
});

// Configuration Template Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')))


// Routes Prefix
app.use("", require('./routes/routes'))


app.listen(PORT, () =>{
    console.log(`Server started http://localhost:${PORT}`);
})

