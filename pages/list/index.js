import Layout from '../components/BaseLayout'
import Link from 'next/link'

import fetch from 'isomorphic-unfetch'

const Checklist = (props) => (
    <Layout>
        <h1>Daftar Checklist</h1>
        <ul>
            {props.users.map((user, index) => (
                <li key={index}>
                    <Link as={`/single/${user.id}`} href={`/single?id=${user.id}`}>
                        <a>{user.username}</a>
                    </Link>
                </li>    
            ))}
        </ul>

            <style jsx>{`
                body {
                    font-family: sans-serif
                },
                a {
                    color: grey,
                    text-decoration: none
                }
            `}</style>
    </Layout>
)

Checklist.getInitialProps = async function() {
    const rest = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await rest.json()
    console.log('total data', data.length)

    return { users: data }
}

export default Checklist