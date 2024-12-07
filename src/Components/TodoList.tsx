import { ChangeEvent,MouseEvent, useState } from "react"

const TodoList = () => {
    const [todo, setTodo] = useState<string[]>([]);
    const [name, setName] = useState<string>("");

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setName(e.target?.value);
    }
    const handleClick = (e : MouseEvent<HTMLButtonElement>) => {
        setTodo((prev) => [...prev, name])
        setName("")
    }

  return (
    <div>
        <h2>ToDo List </h2>
        <input type="text" value={name} onChange={handleChange} placeholder="Enter you todo..." />
        <button onClick={handleClick}>Add todo</button>
        <ul> {todo.map((todo, index) => ( <li key={index}>{todo}</li> ))} </ul>
    </div>
  )
}

export default TodoList
