const Eventhandling = () => {

    const handleMouse = (e : React.MouseEvent<HTMLDivElement>) => {
        console.log("Handle Entered" , e.currentTarget)
    }
    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        console.log("Handle Button" , e.currentTarget)
    }
  return (
    <div onMouseEnter={handleMouse}>
      <h2>Event Handled</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Eventhandling
