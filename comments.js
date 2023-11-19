// Create web server

// Require modules
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const generateComment = require('./comment_generator')
const generateUser = require('./user_generator')

// Set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// Set method-override
app.use(methodOverride('_method'))

// Set express-handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const comment = generateComment(options)
  const user = generateUser(options)
  res.render('index', { comment, user })
})

// Start and listen on the server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})