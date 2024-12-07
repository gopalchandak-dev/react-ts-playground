import { MouseEventHandler } from "react"

type buttonType = {
    handleClick : MouseEventHandler,
    on:boolean
}

const Buttons = ({handleClick, on} : buttonType) => {
  return (
    <div>
        <h2 style={{color:"white", backgroundColor: "violet"}}>button is  {on? "ON": "OFF"}</h2>
      <button onClick={handleClick}>Switch</button>
    </div>
  )
}

export default Buttons
