import { useRef, usestate } from "react"

const inputRef = useRef(null);

function handleClick() {
  inputRef.current.focus();
}

return (
  <>
    <input ref={inputRef} />
    <button onClick={handleClick}>
      Focus the input
    </button>
  </>
);

export default inputRef
