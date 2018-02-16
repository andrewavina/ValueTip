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
            { name, ticker, price, financialCondition, earningsStability, dividendRecord, earningsGrowth, valuePrice, score } = this.state.stock

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
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                                <h3>Stock Ticker: {ticker}</h3>
                                <h3>Price per Share: ${price}</h3>
                           
                                <h4>Calculation Results</h4>
                                <h6>Financial Condition: {financialCondition}</h6>
                                <h6>Earnings Stability: {earningsStability}</h6>
                                <h6>Earnings Growth: {earningsGrowth}</h6>
                                <h6>Dividend Record: {dividendRecord}</h6>
                                <h6>Value Price: {valuePrice}</h6>
                               
                                <h3>Score:</h3>
                                <h3>{score}/5</h3>
                                
                                <Link to="/" onClick={this.onDeleteClick.bind(this)}>
                                    <button className="btn btn-danger">Delete</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ShowStock