import React from 'react'

class Container extends React.Component {
    render () {
        const { data } = this.props

        return (
            <div>
                <form method="POST" action="">
                    {
                        data.map((item, index) => (
                            <div>
                                <text key={index}>{item.name}</text>
                                {
                                    item
                                    && item.items
                                    && item.items.map((opsi, index) => (
                                        <div key={index}>
                                            <input
                                                type="checkbox"
                                                name="checkbox1"
                                                checked={opsi.itemCompletionStatus}
                                            />
                                            <label>{opsi.name}</label>
                                        </div>
                                    ))
                                }
                                <br />
                            </div>
                        ))
                    }

                    <br />
                    <br />
                    <br />
                </form>
            </div>
        )
    }
}
export default Container
