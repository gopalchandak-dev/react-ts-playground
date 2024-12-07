import { FC } from "react"

type typeAdmin = {
    id: number,
    name: string, 
    email: string
    role: string
    createdDate: Date
    isActive :boolean
}

const AdminInfo : FC<typeAdmin> = ({id, name, email, role, createdDate, isActive}) => {
  return (
    <label>
        <h1>Admin Information</h1>
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h3>{email}</h3>
        <h3>{role}</h3>
        <h3>{createdDate.toDateString()}</h3>
        <h3>{isActive}</h3>
    </label>
  )
}

export default AdminInfo
