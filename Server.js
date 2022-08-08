/*const { response } = require('express');*/
const express = require('express');
const app = express();


app.set('view engine', 'ejs')
app.use('/Public', express.static('Public'))


app.get('/', (request, response)=> {
    response.render('pages/index.ejs')
})

app.get('/our-services', (request, response)=> {
    response.render('pages/our-services.ejs')
})

app.get('/contact', (request, response)=> {
    response.render('pages/contact.ejs')
})


app.listen (8000)