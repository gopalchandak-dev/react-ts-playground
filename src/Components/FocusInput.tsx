import { useRef } from "react"

const FocusInput = () => {
    const name = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
        name.current?.focus()

    }
  return (
    <div>
        <input type="text" ref={name} />
        <button onClick={handleFocus}>Click</button>
    </div>
  )
}

export default FocusInput
