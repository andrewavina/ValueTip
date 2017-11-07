import React from 'react'

class Companies extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        this.setState({
            currentUser: this.props.currentUser
        })
    }
    
    render() {
        return (
            <div className='companies'>
                <h1>Companies Page</h1>
            </div>
        )
    }
}

export default Companies