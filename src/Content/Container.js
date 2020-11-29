import React from 'react'

class Container extends React.Component {
    render() {
        const { data } = this.props

        return(
            <div>
            <form method="POST" action="">
                {
                    data.map((item, index) => (
                        <div>
                        <input 
                            type="checkbox" 
                            name="checkbox1" 
                        />
                        <label>{item.name}</label>
                    </div>
                    ))
                }
                
                <br />
                <br />
                <br />
                <br />
            </form>
    </div>
        )
    }
}
export default  Container
  