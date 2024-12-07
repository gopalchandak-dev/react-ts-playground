type typeInfo = {
    id: number,
    name: string, 
    email: string
}
type typeAdmin = {
    id: number,
    name: string, 
    email: string
    role: string
    createdDate: Date
    isActive :boolean
}
  
  const AdminInfoList: typeInfo[] = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@example.com"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@example.com"
    },
    {
      id: 3,
      name: "Carol Williams",
      email: "carol.williams@example.com"
    },
    {
      id: 4,
      name: "David Brown",
      email: "david.brown@example.com"
    },
    {
      id: 5,
      name: "Eva Davis",
      email: "eva.davis@example.com"
    }
  ];


  const AdminInfo: typeAdmin[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com", 
        role: "Super Admin", 
        createdDate: new Date(), 
        isActive: true
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        role: "Super Admin", 
        createdDate: new Date(), 
        isActive: true
      },
      {
        id: 3,
        name: "Carol Williams",
        email: "carol.williams@example.com",
        role: "Super Admin", 
        createdDate: new Date(), 
        isActive: true
      }
  ]
  
  export  {AdminInfoList, AdminInfo};
  

