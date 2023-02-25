import React from 'react'
import classes from './todocard.module.css'
import Button from '../Button/Button'
const ToDoCard = ({ todo, handleDone, handleDelete }) => {
  return (
    <div className={classes.wrapperCard}>
         <div className={todo.completed ?  classes.TodDone  : classes.todoCard }>
        <h3>{todo.title}</h3>
    </div>
        <Button onClick={handleDone} id={todo.id}>Done</Button>
        <Button onClick={handleDelete} id={todo.id}>Delete</Button>
    </div>
  )
}
export default ToDoCard