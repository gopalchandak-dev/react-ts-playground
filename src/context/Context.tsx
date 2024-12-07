import { createContext, FC, ReactNode, useState } from "react";
interface MyContextProps {
    count: number,
    increment : () => void,
    decrement : () => void,
    reset  :() => void
}
export const MyContext =  createContext<MyContextProps>({
    count : 0,
    increment : () => {},
    decrement : () => {},
    reset : () => {}
})
interface MyProviderprops {
    children : ReactNode
}
const MyProvider : FC<MyProviderprops> = ({children}) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <MyContext.Provider value={{count, increment, decrement, reset}}>
            {children}
        </MyContext.Provider>
    )
}
export default MyProvider;