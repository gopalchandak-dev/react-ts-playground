import { useReducer } from "react"
import { Action1, State1 } from "../counterReducer";

const reducer = (state :State1 , action: Action1) : State1 => {
    switch (action.type) {
        case "RESET" :
            return {count : 0};
        case "DECREMENT" :
            return {count : state.count - 1}; 
        case "INCREMENT" :
            return {count : state.count  + 1 };
        default :
            return state;
    }
}

const RedCounter = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0});
  return (
    <div>
        <h2>Count is {state.count}</h2>
        <button onClick={() => dispatch({type : 'RESET'})}>Reset</button>
        <button onClick={() => dispatch({type : 'DECREMENT'})}>Decrement</button>
        <button onClick={() => dispatch({type : 'INCREMENT'})}>Increment</button>
    </div>
  )
}

export default RedCounter
