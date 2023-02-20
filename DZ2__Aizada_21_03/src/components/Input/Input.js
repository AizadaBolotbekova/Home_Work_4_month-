import { useState } from "react";



const Input = () => {

    const [searchValue, setSearchValue]= useState(null)

    return (
        <input type="text" placeholder="Search..." value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
    )
}


export default Input;