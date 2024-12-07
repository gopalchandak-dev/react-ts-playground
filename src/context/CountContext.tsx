import { createContext, ReactNode, useState,FC } from "react";
interface MyCountContextProps {
    count: number,
    increment : () => void,
    decrement : () => void,
    reset: () => void
}
export const MyCountContext = createContext<MyCountContextProps>({
    count : 0,
    increment : () => {},
    decrement : () => {},
    reset: () => {},
}) 
interface MyCountProviderProps {
    children :ReactNode
}
const MyCountProvider :FC<MyCountProviderProps>= ({children} ) => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1)
    };
    const decrement = () => {
        setCount(count - 1)
    };
    const reset = () => {
        setCount(0)
    };
    return (
        <MyCountContext.Provider value={{count, increment, decrement, reset}}>
            {children}
        </MyCountContext.Provider>
    )
}
export default MyCountProvider;