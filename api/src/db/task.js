const nanoid = require('nanoid')

const createTaskModel = db => {
    return {
        findMany(filter) {
        return db.get('task')
            .filter(filter)
            .orderBy(['createdAt'], ['desc'])
            .value()
        },

        findOne(filter) {
        return db.get('task')
            .find(filter)
            .value()
        },

        create(task) {
        const newTask = {id: nanoid(), createdAt: Date.now(), ...task}
        
        db.get('task')
            .push(newTask)
            .write()

        return newTask
        }
    }
}

module.exports = createTaskModel
