import { FormEvent, useRef, useState } from 'react'

type typeForm = {
    name: string,
    email: string,
    password: string,
}

const Form = () => {
    const [submittedData, setSubmittedData] = useState<typeForm>({
        name: "",
        email : "",
        password : ""
    })

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

    const handleSubmit= (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const newName = name.current!.value;
        const newEmail = email.current!.value;
        const newPassword = password.current!.value;

        setSubmittedData({
            name: newName,
            email: newEmail,
            password: newPassword
        })
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter your name' ref={name}/>
        <input type="email" placeholder='Enter your email' ref={email}/>
        <input type="password" placeholder='Enter your password' ref={password} />

        <button type='submit'>Click me</button>

        <section>
            <h2>Name: {submittedData.name}</h2>
            <h2>Email: {submittedData.email}</h2>
            <h2>Password: {submittedData.password}</h2>
        </section>
    </form>
  )
}
export default Form
