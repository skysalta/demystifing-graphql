import React, {useState} from 'react'
import TasksList from '../components/TasksList'
import NewTaskModal from '../components/NewTaskModal'
import Loader from '../components/Loader'

export default function Tasks () {
    const [modal, setModal] = useState(false)

    // Remove this data with some graphql magic
    const loading = false;
    const error = false;
    const data = {
        tasks: [
            {
                "id": "strjBWMVGjm50l6LGwepDotyaaing",
                "createdAt": 1693047101615,
                "name": "First Task",
                "type": "IT",
                "description": "First task description is short"
            }
        ]
    }

    const onSubmit = input => {
        setModal(false)
        console.log(input)
    }
    
    if (modal) {
        return <NewTaskModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
    }

    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <p>Error!</p>
    }

    return (
        <div className="page tasks-page">
        <section>
            <div className="row betwee-xs middle-xs">
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
