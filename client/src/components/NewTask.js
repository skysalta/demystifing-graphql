import React, {useState} from 'react'
import Select from 'react-select'

const options = [
    { value: 'UX', label: 'UX' },
    { value: 'SEO', label: 'SEO' },
    { value: 'BA', label: 'BA' },
    { value: 'IT', label: 'IT' }
]

export default function NewTask({onSubmit, onCancel}) {
    const [type, setType] = useState('UX')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const activeOption = options.find(o => o.value === type)

    const submit = e => {
        e.preventDefault()
        onSubmit({name, type, description})
    }

    const cancel = e => {
        e.preventDefault()
        onCancel()
    }

    return (
        <div className="new-task page">
            <h1>New Task</h1>
            <div className="box">
                <form onSubmit={submit}>
                    <Select
                        value={activeOption}
                        defaultValue={options[0]}
                        onChange={e => setType(e.value)}
                        options={options}
                    />

                    <input
                        className="input"
                        type="text"
                        placeholder="task name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        className="input"
                        type="text"
                        placeholder="task description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <a className="error button" onClick={cancel}>cancel</a>
                    <button className="submit button" type="submit" name="submit">add task</button>
                </form>
            </div>
        </div>
    )
}
