import React from 'react'
import Link from 'next/link'
import { get, getUserToken, remove } from '../../src/utils/storage'

import List from '../../src/Content/Container'

class Content extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getAllData()
  }

  getAllData = async () => {
    const token = await get('@token')
    console.log('token di content', token)
    const res = await fetch('http://18.139.50.74:8080/checklist', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    }).then((t) => t.json())

    const ok = res.statusCode = 200
    const result = ok

    if(result === 200) {
      this.setState({
        data: res.data
      })
    } else {
        alert('Something went wrong !')
    }
    console.log('res all data', res)
  }

  isLogout = async () => {
    await remove('@token')
  }

  render() {
    const { data } = this.state
    console.log('xxxx=>', data)

    return(
      <div>
          <h1>Welcome to content !</h1>
          <List data={data} />
  
          <Link href="" >
            <a onClick={()=> this.isLogout() }>
              <text>Logout</text>
            </a>
          </Link>
      </div>
    )
  }
}
export default  Content
