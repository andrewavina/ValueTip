import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class ShowStock extends React.Component {
    state = {
        stock: {},
        creatorId: ''
    }

    componentDidMount(){
        const { id } = this.props.match.params
        axios({
            method: 'get',
            url: `/api/stocks/${id}`
        }).then((res) => {
            this.setState({
                stock: res.data,
                creatorId: res.data.user._id
            })
        })
    }

    onDeleteClick(evt) {
        evt.preventDefault()
        const { id } = this.props.match.params
        axios({
            method: 'delete',
            url: `/api/stocks/${id}`
        }).then((res) => {
            this.props.history.push('/myreport')
        })
    }

    render() {
        console.log(this.props.currentUser)
        const 
            { name, ticker, price } = this.state.stock,
            { id } = this.props.match.params
                return (
                    <div className="ShowStock">
                        <button className="btn btn-warning">
                            <Link to={`/edit-stock/${id}`}>Edit Stock</Link>
                        </button>
                        
                        <button className="btn btn-danger">
                            <Link to="/" onClick={this.onDeleteClick.bind(this)}>Delete</Link>
                        </button>
                        
                        <h1>Company Name: {name}</h1>
                        <h3>Stock Ticker: {ticker}</h3>
                        <h3>Price per Share: {price}</h3>
                    </div>
                )
    }
} //last bracket

export default ShowStock