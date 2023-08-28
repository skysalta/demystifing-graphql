import React from 'react'
import NewTask from './NewTask'

export default function NewTaskModal({onSubmit, onCancel}) {
  return (
    <div className="row center-xs">
        <div className="col-xs-8">
            <NewTask onSubmit={onSubmit} onCancel={onCancel} />
        </div>
    </div>
  )
}
