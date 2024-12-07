import { useState } from 'react'

type userType = {
    id : number,
    name: string,
    sname: string,
    date : Date
}

const UserProfile = () => {
    const [user, setUser] = useState<userType>({
        id:1 ,
        name: "gopal",
        sname:"chandeak",
        date : new Date()
    })
  return (
    <div>
      <h1>User information</h1>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.sname}</p>
      <p>{user.date.toLocaleTimeString()}</p>
    </div>
  )
}

export default UserProfile
