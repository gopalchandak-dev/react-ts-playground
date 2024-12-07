import { FC, ReactNode } from "react"


type haHaHa ={
    children:ReactNode
}


const User : FC<haHaHa>  = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default User
