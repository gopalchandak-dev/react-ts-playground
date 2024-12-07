import { useReducer } from "react"

type State  = {count : number};
type Action = {type : 'INCREMENT'} | {type : "DECREMENT"} | {type : "RESET"}
const reducer = (state : State, action : Action) : State => {
    switch (action.type) {
        case 'INCREMENT':
            return {count : state.count + 1};

        case 'DECREMENT' :
            return {count : state.count - 1};

        case 'RESET' : 
            return {count : 0};
        default:
            return state;
    }
}

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, {count : 0});
  return (
    <div>
        <p>Count is {state.count}</p>
        <button onClick={() => dispatch({type : "INCREMENT"})}>Increment</button>
        <button onClick={() => dispatch({type : "DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatch({type : "RESET"})}>Reset</button>
    </div>
  )
}

export default ReducerCounter
