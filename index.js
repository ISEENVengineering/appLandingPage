const express = require('express')
const morgan = require('morgan')
const app = express()
const routes = require('./routes/Routes')
const path = require('path')

app.use(routes)
app.use('/static', express.static(path.join(__dirname, 'publics/')))

app.set('port', 3000 || process.env.PORT)
app.use(morgan('dev'))


app.listen(app.get('port'), () => {
    console.log('app corriendo');
})
