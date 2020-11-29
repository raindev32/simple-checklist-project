import { useState } from "react"
import router from 'next/router'
import Header from '../components/Header/Auth'
import { set } from '../../src/utils/storage'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [message, setMessage] = useState("")

    async function submitForm() {
        const res = await fetch('http://18.139.50.74:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username, password
            })
        }).then((t) => t.json())

        const ok = res.statusCode = 200
        const result = ok

        if(result === 200) {
            await set('@token', res.data.token)
            alert(res.message)
            router.push({
                pathname: '/content'
            })

        } else {
            alert('Something went wrong !')
        }
        console.log('res login', res)
    }

    return(
        <div>
            <Header />
            <form method="POST" action="/api/login">
                <input 
                    type="text" 
                    name="username" 
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <input type="button" value="Login" onClick={submitForm} />
            </form>
        </div>
    )
}
export default Login