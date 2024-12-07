import { useEffect, useState } from "react"

type UserDataType = {
    id: number,
    name : string,
    username: string,
    email : string,
    phone : string
}

const Userlist = () => {
    const [userData, setUserData] = useState<UserDataType[] | null>(null)

    useEffect(() => {
        const fetchDataFun = async () => {
            try { 
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const result = await res.json();
                setUserData(() => result) 
            } catch (err) { 
                console.log("Error while fetching data ", err);
                
            }
        }
        fetchDataFun();
    } ,[])
  return (
    <div>
        <h2>User Data </h2>
        {
            userData?.map((items, index) => (
                <div key={index}>
                    <div><strong>ID : </strong>{items.id} </div> 
                    <div><strong>Name : </strong>{items.name} </div>
                    <div><strong>Username : </strong>{items.username} </div>
                    <div><strong>Email : </strong>{items.email} </div>
                    <div><strong>Phone : </strong>{items.phone} </div>
                    <br /> <br />
                </div>
            ))
        }
    </div>
  )
}

export default Userlist
