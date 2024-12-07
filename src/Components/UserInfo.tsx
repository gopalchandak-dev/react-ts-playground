
const UserInfo = ({id, name, email} : {id:number, name:string, email:string}) => {
  return (
    <div>
        <h2>{id}</h2>
        <h2>{name}</h2>
        <h2>{email}</h2>
    </div>
  )
}

export default UserInfo
