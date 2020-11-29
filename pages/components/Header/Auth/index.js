import React from 'react'
import Link from 'next/link'
import router from 'next/router'
import { get, remove } from '../../../../src/utils/storage'

class HeaderAuth extends React.Component {
    state = {
        token: null
    }

    isLogin = async () => {
        let getToken = await get('@token')
        console.log('getToken', getToken)
        this.setState({
            token: getToken
        })
    }

    render() {
        const NavigasiAuth = [
            {
                name: "Home",
                link: '/',
                onPress: () => {}
            },
            {
                name: "Login",
                link: '/login',
                onPress: () => {}
            },
            {
                name: "Register",
                link: '/register',
                onPress: () => {}
            }
        ]

        return(
            <div>
            {
                    NavigasiAuth.map((item, index) => (
                        <Link key={index} href={item.link} >
                            <a onClick={() => item.onPress}>
                                <text>{`${item.name}`}</text>
                            </a>
                        </Link>
                    ))
            }
        </div>
        )
    }
}
export default  HeaderAuth
