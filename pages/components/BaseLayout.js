import Navigation from './Navigation'
import Head from 'next/head'

var dateNow = new Date()
var year = dateNow.getUTCFullYear();

const Layout = (props) => (
    <div>

        <Head>
            <title>Simple Checklist</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="utf-8" />
        </Head>

        <Navigation />
        {props.children}

        <p>{`Footer: @ JhonySuprianto ${year}`}</p>
    </div>
)
export default Layout