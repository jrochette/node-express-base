const fileSystem = require('fs')
const logger = require('pino')()

module.exports = {
	save (team, callback) {
		fileSystem.writeFile('./teams.json', JSON.stringify(team), error => {
			if (error) {
				logger.error('Error while writing to file', error)
				callback(error)
			} else
				callback(null, team)
		})
	},
}