import React from 'react'

const Paginiation = ({ changeOffset, page }) => {
  return (
    <div>
        <button onClick={() => changeOffset('prev')}>
            Prev
        </button>
        {page}
        <button onClick={() => changeOffset('next')}>
            Next
        </button>
    </div>
  )
}

export default Paginiation