module.exports = {
    Query: {
        tasks(_, {input}, {models}) {
            return models.Task.findMany(input || {})
        },
        task(_, {id}, {models}) {
            return models.Task.findOne({id})
        },
        user(_, __, {models}) {
            return models.User.findOne()
        }
    },
    Mutation: {
        addTask(_, {input}, {models, user}) {
            const task = models.Task.create({...input, user: user.id})
            return task
        }
    },
    Task: {
        owner(task, _, {models}) {
            return models.User.findOne({id: task.user})
        }
    },
    User: {
        tasks(user, _, {models}) {
            return models.Task.findMany({user: user.id})
        }
    }
}
