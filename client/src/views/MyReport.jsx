import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MyReport extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stocks: []
        }
    }

    getStocks(){
        axios({
            method: 'get',
            url: `/api/users/${this.props.currentUser._id}/stocks`
        }).then((res) => {
            this.setState({
                stocks: res.data
            })
        })
    }

    componentDidMount(){
        this.getStocks()
    }

    render(){
        console.log(this.props.currentUser)
        return (
            <div className="MyReport">
                <h1>My Report</h1>
                <Link to="/create-stock">Add a Stock</Link>
                <hr/>
                <h2>Saved Stocks</h2>
                    <ul>
                        {this.state.stocks.map((stock, index) => {
                            return (
                                <li key={stock._id}><Link to={`/show-stock/${stock._id}`} key={index}>{stock.name}</Link></li>
                            ) 
                        })}
                    </ul>
            </div>
        )
    }

} //last bracket

export default MyReport