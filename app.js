//npm packages
const express = require('express')
const hbs = require('hbs')
const path = require('path')

//Variables for various paths
const viewsPath = path.join(__dirname, '/templates/views')

//express setup / config
const app = express()
app.set('views', viewsPath)
app.set('view engine', 'hbs')



//Routing
app.get('', (req, res) => {
    res.render('index')
})


//Start server
app.listen(3000, () => {
    console.log('Server is up!')
})
