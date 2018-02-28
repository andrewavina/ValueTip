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
        const 
            { name, ticker, price, targetPrice, date, financialCondition, earningsStability, dividendRecord, earningsGrowth, valuePrice, score } = this.state.stock

        return (
            <div className="ShowStock">
                {/* NEW */}

                <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner" >
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center">
                                <div className="row row-mt-15em">
                                    <div className="col-md-12 mt-text " data-animate-effect="fadeInUp">
                                        <h1>Company Name: {name}</h1>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                <div className="gtco-section">
                    <div className="gtco-container">
                        {/* NEW */}
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">GENERAL INFO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                
                                    <td>Stock Ticker:</td>
                                    <td>{ticker}</td>
                                </tr>
                                <tr>                                
                                    <td>Price per Share:</td>
                                    <td>${price}</td>
                                </tr>
                                <tr>                                
                                    <td>Target Price (40% growth):</td>
                                    <td>${targetPrice}</td>
                                </tr>
                                <tr>                                
                                    <td>Date of Price Point:</td>
                                    <td>{date}</td>
                                </tr>
                            </tbody>                            
                        </table>     

                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">CALCULATION RESULTS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>                                
                                    <td>Financial Condition:</td>
                                    <td>{financialCondition}</td>
                                </tr>
                                <tr>                                
                                    <td>Earnings Stability:</td>
                                    <td>{earningsStability}</td>
                                </tr>
                                <tr>                                
                                    <td>Earnings Growth:</td>
                                    <td>{earningsGrowth}</td>
                                </tr>
                                <tr>                                
                                    <td>Dividend Record:</td>
                                    <td>{dividendRecord}</td>
                                </tr>
                                <tr>                                
                                    <td>Value Price:</td>
                                    <td>{valuePrice}</td>
                                </tr>
                            </tbody>                            
                        </table>    

                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                <th scope="col">SCORE: {score}/5</th>
                                </tr>
                            </thead>
                        </table>                
                        
                        <Link to="/" onClick={this.onDeleteClick.bind(this)}>
                            <button className="btn btn-danger">Delete</button>
                        </Link>
                            
                    </div>
                </div> 
            </div>
        )
    }
}

export default ShowStock