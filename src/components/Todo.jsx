import React from 'react'
// import { useState } from 'react'

import styles from "./todo.module.css"
import { TodoItem } from './TodoItem'
// import { TodoItem } from './TodoItem'

export const Todo = () => {

    let [value , setValue] = React.useState("")
    const [todos, setTodos]  = React.useState([])

    const handleChange = (e) => {
 setValue  (e.target.value)
    }

    const onDelete = (id) => {
        let newTodos = todos.filter(todo=>todo.id!==id)
        setTodos(newTodos)
    }

  return (
    <div>
        Todo
        <br></br>
        <input value={value} placeholder='hello' onChange={handleChange} />
        <button onClick={()=> {
            setTodos ([...todos,{id: Date.now(), value: value, isCompleted:false },
            ])
            setValue("")
        }} > 
        Add 
        </button>

        <div>

                {todos.map((todo) => (
                   <TodoItem key={todo.id} todo = {todo} onDelete = {onDelete} />
                ))}

        </div>

        
    </div>
  );
}
