import React from 'react'
import TodoCard from "../TodoCard/TodoCard";
const List = ({ list, handleDone, handleDelete }) => {
  return (
    <>
    {list.map((todo) => <TodoCard
    key={todo.id}
    todo={todo}
    handleDone={handleDone}
    handleDelete={handleDelete}
    />)}
    </>
  )
}
export default List