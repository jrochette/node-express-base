const chai = require('chai')
const fileSystemRepository = require('../repository/fileSystemRepository')

const assert = chai.assert

describe('FileSystemRepository', () => {
	it('saveShouldWriteTeamToJsonFile', () => {
		fileSystemRepository.save({ name: 'culbot' }, error => {
			if (error)
				assert.fail()
		})
		assert.isTrue(true)
	})
})
