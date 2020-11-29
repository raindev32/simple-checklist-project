import { useState } from "react"
import Header from '../components/Header/Auth'

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [message, setMessage] = useState("")

    async function submitForm() {
        const res = await fetch('http://18.139.50.74:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, password, email
            })
        }).then((t) => t.json())
        
        res.statusCode = 200
        console.log('res register', res)
    }

    return(
        <div>
            <Header />
            <form method="POST" action="/api/login">
                <input 
                    type="text" 
                    name="email" 
                    placeholder="masukkan email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <br />
                <input 
                    type="text" 
                    name="username" 
                    placeholder="masukkan username"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="masukkan password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <input type="button" value="Register" onClick={submitForm} />
            </form>
        </div>
    )
}
export default Register