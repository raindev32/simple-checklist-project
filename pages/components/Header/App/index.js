import React from 'react'
import Link from 'next/link'
import { get, remove } from '../../../../src/utils/storage'

class HeaderApp extends React.Component {
    isLogin = async () => {
        let getToken = await get('@token')
        console.log('getToken', getToken)
    }

    isLogout = async () => {
        let token = await remove('@token')
        console.log('getToken', token)
    }

    render() {
        const NavigasiApp = [
            {
                name: "Home",
                link: '/',
                onPress: () => {}
            },
            {
                name: "Logout",
                link: '/',
                onPress: () => this.isLogout()
            }
        ]

        return(
            <div>
            {
                    NavigasiApp.map((item, index) => (
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
export default  HeaderApp
