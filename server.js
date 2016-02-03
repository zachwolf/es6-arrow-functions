var Promise = require('bluebird')
	// server
	, express = require('express')
	, app     = Promise.promisifyAll(express())

const PORT  = 1618

app.set('views', './src')
app.set('view engine', 'ejs')

app.locals = {
	url: `http://localhost:${PORT}`
}

app.get('/', function (req, res) {
	res.render('index')
})

app.use('/node_modules', express.static('node_modules'))
app.use(express.static('src'))

app.listenAsync(PORT)
	.then(() => {
		console.log(`listening on port ${PORT}`)
	})