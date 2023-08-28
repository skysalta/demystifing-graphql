import React, {useState} from 'react'
import gql from 'graphql-tag'
import { useQuery, useMutation } from '@apollo/react-hooks'
import TasksList from '../components/TasksList'
import NewTaskModal from '../components/NewTaskModal'
import Loader from '../components/Loader'

const TASK_FIELDS = gql`
  fragment TaskFields on Task {
    id
    name
    type
    description
    assignedBy @client
  }
`
const ALL_TASKS = gql`
  query AllTasks{
    tasks{
      ...TaskFields
    }
  }
  ${TASK_FIELDS}
`
const NEW_TASK = gql`
mutation CreateATask($newTask: NewTaskInput!){
  addTask(input: $newTask){
    tasks{
      ...TaskFields
    }
  }
  ${TASK_FIELDS}
}
`


export default function Tasks () {
    const [modal, setModal] = useState(false)
    const {data, loading, error} = useQuery(ALL_TASKS)
    const [createTask, newTask] = useMutation(NEW_TASK, {
        update(cache, {data: {addTask}}) {
            const data = cache.readQuery({query: ALL_TASKS})
            cache.writeQuery({
                query: ALL_TASKS,
                data: { tasks: [addTask, ...data.tasks]}
            })
        }
    })

    const onSubmit = input => {
        setModal(false)
        createTask({variables: {
            newTask: input
          }})
    }
    
    if (modal) {
        return <NewTaskModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
    }

    if (loading || newTask.loading) {
        return <Loader/>
    }

    if (error || newTask.error) {
        return <p>Error!</p>
    }
    console.log(data.tasks[0])
    return (
        <div className="page tasks-page">
        <section>
            <div className="row between-xs middle-xs">
                <div className="col-xs-10">
                    <h1>Tasks</h1>
                </div>

                <div className="col-xs-2">
                    <button onClick={() => setModal(true)}>new task</button>
                </div>
            </div>
        </section>
        <section>
            <TasksList tasks={data.tasks}/>
        </section>
        </div>
    )
}
