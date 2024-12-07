import { FormEvent, useRef, useState } from "react"

type contactType = {
    name: string,
    number: number
}
type arrayType = {
    contact : contactType
}
const ContactForm = () => {
    const [totalContact, setTotalContact] = useState<arrayType[]>([])
    const [contact, setContact] = useState<contactType>({
        name: "",
        number: 0
    })

    const name = useRef<HTMLInputElement>(null);
    const number = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newName = name.current? name.current.value : ""; 
        const newNum = number.current? parseInt(number.current.value) : 0; 

        const newContact ={
            name: newName,
            number: newNum
        } 
        setContact(newContact);

        if (newContact.name.length > 1 && newContact.number) { 
            setTotalContact((prev) => ([...prev, { contact: newContact }]));
        } 

        if (name.current) name.current.value = ""; 
        if (number.current) number.current.value = "";
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={name} />
        <input type="number" placeholder="Enter Number" ref={number} />
        <button type="submit">Add</button>
        <h2>Total Contacts</h2>
        <ul>
           {totalContact.map((items, key) => (
            <li key={key}><div>{items.contact.name} - {items.contact.number}</div> </li>
           ))} 
        </ul>
    </form>
  )
}

export default ContactForm
