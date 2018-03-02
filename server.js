const express = require('express')
const bodyParser = require('body-parser')
const logger = require('pino')()
const teamRepository = require('./repository/fileSystemRepository')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8080

const router = express.Router()

// logging request filter to use for all requests
router.use((request, response, next) => {
	logger.info('Incomming request on', request.path)
	next()
	logger.info('Returned', response.statusCode)
})

router.get('/', (request, response) => {
	response.json({ message: 'hello world' }).status(200)
})

router.post('/teams', (request, response) => {
	const team = request.body
	logger.info(team)
	teamRepository.save(team, (error, res) => {
		if (error)
			response.json(error).status(500)
		else
			response.json(res).status(200)
	})
})

app.use('/api', router)
app.listen(port)
logger.info('Server started on port ' + port)