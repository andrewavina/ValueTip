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
        // console.log(this.props.currentUser) // test to see current user
        return (
            <div className="MyReport">
                <h1>My Report</h1>
                
                <Link to="/create-stock">
                <button className="btn btn-light">Add a Stock</button>
                </Link>
                
                <hr/>
                <h2>Saved Stocks</h2>
                    <ul>
                        {this.state.stocks.map((stock, index) => {
                            return (
                                <div>
                                    <button className="btn btn-light" key={stock._id}><Link to={`/show-stock/${stock._id}`} key={index}>{stock.name}</Link></button>
                                    <br/>                                    
                                    <br/>
                                </div>
                            ) 
                        })}
                    </ul>
            </div>
        )
    }

} //last bracket

export default MyReport