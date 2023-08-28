import React from 'react'

const TaskBox = ({task}) => (
    <div className="task">
        <div className="task-name">{task.name}</div>
        <div className="task-type">{task.type}</div>
        <div className="task-description">{task.description}</div>
    </div>
)

export default TaskBox
