import React from 'react'
import TaskBox from './TaskBox'

export default function TasksList({tasks}) {
    return (
        <div className="row">
            {tasks.map(task => (
                <div className="col-xs-12 col-md-4 col" key={task.id}>
                <div className="box">
                    <TaskBox task={task} />
                </div>
                </div>
            ))}
        </div>
    )
}

TasksList.defaultProps = {
    tasks: []
}
