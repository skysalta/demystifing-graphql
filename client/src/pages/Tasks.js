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
        <div className="w-100 px-20 pt-8">
        <section>
            <div className="flex justify-between mb-4">
                    <h1 className='font-bold text-3xl'>Tasks</h1>
                    <button className='bg-blue-500 px-4 text-white py-1 rounded mr-8' onClick={() => setModal(true)}>New Task</button>
                </div>
            </section>
            <section>
                <TasksList tasks={data.tasks}/>
            </section>
        </div>
    )
}
