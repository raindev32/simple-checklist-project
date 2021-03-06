import Layout from '../components/BaseLayout'

import fetch from 'isomorphic-unfetch'

const Checklist = (props) => (
    <Layout>
        <h1>Daftar Checklist</h1>
        <ul>
            {props.dataList.map((item, index) => (
                <li key={index}>
                    <a>{item.name}</a>
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
    const rest = await fetch('http://18.139.50.74:8080/checklist')
    const data = await rest.json()
    console.log('total data', data.length)

    return { dataList: data }
}

export default Checklist