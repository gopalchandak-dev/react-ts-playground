import { FC, useContext } from "react"
import { MyCountContext } from "../context/CountContext"

const CountContext: FC = () => {
    const {count, increment, decrement, reset} = useContext(MyCountContext);
  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default CountContext
