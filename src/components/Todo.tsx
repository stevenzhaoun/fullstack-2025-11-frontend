import { useState } from 'react'

export default function Todo() {
    const [todos, setTodos] = useState<{ title: string, id: number }[]>([])
    const [text, setText] = useState('')

    const handleAdd = () => {
        console.log('text', text)
        const newTodo = {
            title: text,
            id: new Date().valueOf(),
        };
        const newTodos = [...todos, newTodo]
        setTodos(newTodos)
        setText('')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <>
            <input type="text" id="input" value={text} onChange={handleChange} />
            <button onClick={handleAdd}>add</button>
            {todos.length}
            <ul>
                {todos.map((todo) => {
                    return <li key={todo.id}>{todo.title}</li>
                })}
            </ul>
        </>
    )
}