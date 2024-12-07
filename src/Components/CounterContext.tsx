import { FC, useContext } from "react"
import { MyContext } from "../context/Context"

const CounterContext : FC = () => {
    const {count, increment, decrement, reset} = useContext(MyContext);
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterContext
