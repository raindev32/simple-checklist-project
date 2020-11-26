import Layout from '../components/BaseLayout'
import Link from 'next/link'

import fetch from 'isomorphic-unfetch'

const Detail = (props) => (
    <Layout>
        <h1>Daftar Checklist</h1>
        <ul>
            {props.dataList.map((item, index) => (
                <li key={index}>
                    <Link as={`/detail/${item.id}`} href={`/detail?id=${item.id}`}>
                        <a>{item.name}</a>
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

Detail.getInitialProps = async function() {
    const rest = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await rest.json()
    console.log('total data', data.length)

    return { dataList: data }
}

export default Detail