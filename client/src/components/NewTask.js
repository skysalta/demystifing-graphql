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
            <h1 className='pb-2'>New Task</h1>
            <div className="overflow-hidden shadow-lg p-6 bg-white rounded">
                <form onSubmit={submit} className='flex flex-col gap-6'>
                    <Select
                        value={activeOption}
                        defaultValue={options[0]}
                        onChange={e => setType(e.value)}
                        options={options}
                    />

                    <input
                        className="input capitalize"
                        type="text"
                        placeholder="task name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        className="input capitalize"
                        type="text"
                        placeholder="task description"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <div className='flex flex-col gap-2'>
                        <a className="bg-red-500 px-4 py-1 text-white rounded hover:cursor-pointer capitalize" onClick={cancel}>cancel</a>
                        <button className="bg-blue-500 px-4 text-white py-1 rounded capitalize" type="submit" name="submit">add task</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
