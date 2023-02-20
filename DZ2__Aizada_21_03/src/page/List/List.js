import React from 'react'

function List(props) {

  return (
    <div>
        {
            props.list.map(i=> <p>{i.task}</p>)
        }
    </div>
  )
}

export default List
