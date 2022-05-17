import React from 'react'
import styles from "./todo.module.css"

export const TodoItem = ( {todo, onDelete} ) => {

    const [isCompleted,setIsCompleted] = React.useState(todo.isCompleted)

  return (
    <div key={todo.id} className={styles.todo} >
    <input type= "checkbox" onChange={(e)=>{
        setIsCompleted(e.target.checked)
    }} />
    <div className= {isCompleted ? styles.striked : ""} >{todo.value}</div>
    <button onClick={ ()=> onDelete (todo.id)} >Delete</button>
</div>
  )
}
