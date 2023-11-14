import React from 'react'

const TaskBox = ({task}) => (
    <div className="overflow-hidden shadow-lg p-6 bg-white rounded px-6 py-4">
        <div className='flex justify-between'>
            <div className="font-bold text-xl text-sky-500 mb-2">{task.name}</div>
            <div className="bg-sky-200 rounded-full px-3 py-1 text-sm font-semibold text-sky-700 leading-6">{task.type}</div>
        </div>
        <div className="text-gray-700 text-base">{task.description}</div>
    </div>
)

export default TaskBox
