const express = require('express')

const app = express()
const { readFile } = require('fs')

app.use(express.static('dist'));

app.get('/', (request, response) => {
    readFile('./dist/index.html', 'utf8', (error, html) => {
        response.send(html)
    })
})

app.listen(process.env.PORT || 3000, () => console.log('App now running on http://localhost:3000'))