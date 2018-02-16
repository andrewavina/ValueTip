import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class MyReport extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            stocks: [],
            companyImage: ""
        }
    }

    getStocks(){
        axios({
            method: 'get',
            url: `/api/users/${this.props.currentUser._id}/stocks`
        }).then((res) => {
            this.setState({
                stocks: res.data,
                // companyImage: `https://logo.clearbit.com/${res.data[2].name}.com`,
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
                <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner" >
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center">
                                <div className="row row-mt-15em">
                                    <div className="col-md-12 mt-text" data-animate-effect="fadeInUp">
                                        <h1>My Report</h1>
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
                                <Link to="/create-stock">
                                <button className="btn btn-primary">Add a Stock</button>
                                </Link>				
                            </div>
                        </div>
                        {/* Saved Stocks */}
                        <div className="row">
                        {this.state.stocks.map((stock, index) => {
                            return (
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="fh5co-card-item image-popup">
                                    <figure>
                                        <img src="images/img_1.jpg" alt="" className="img-responsive"></img>
                                        {/* Clearbit - try to get logo */}
                                        {/* <img src={this.state.companyImage} className="img-responsive"/> */}
                                    </figure>
                                    <div className="fh5co-text">
                                        <h2>{stock.name}</h2>
                                        <Link to={`/show-stock/${stock._id}`} key={index}>                                        
                                            <button className="btn btn-primary" key={stock._id}>Details</button>                                            
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            ) 
                        })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} //last bracket

export default MyReport