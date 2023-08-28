const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('api/src/db/db.json')
const db = low(adapter)

const createTaskModel = require('./task')
const createUserModel = require('./user')

module.exports = {
    models: {
        Task: createTaskModel(db),
        User: createUserModel(db),
    },
    db
}