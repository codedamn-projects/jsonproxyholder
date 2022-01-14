const fetch = require('node-fetch')
const express = require('express')

const app = express()

app.get('/', (req, res) => {
	res.json({
		helloWorld: true,
	})
})

app.get('*', (req, res) => {
	res.json({
		404: true,
	})
})

app.listen(1338, () => {
	console.log('Server listening on port 1338')
})
