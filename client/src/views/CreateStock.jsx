import React from 'react'
import axios from 'axios'

class CreateStock extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        name: '',
        ticker: '',
        price: 0.00,
        currentAssets: 0,
        currentLiabilities: 0,
        financialCondition: '',
        earnings2014: 0,
        earnings2015: 0,
        earnings2016: 0,
        earningsStability: '',
        score: 0
    };

    //what happens after submit button clicked
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    
    //fields' values from changes to input fields
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTickerChange = this.handleTickerChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);        
    this.handleAssetsChange = this.handleAssetsChange.bind(this);
    this.handleLiabilitiesChange = this.handleLiabilitiesChange.bind(this);
    this.handleEarnings2014Change = this.handleEarnings2014Change.bind(this);
    this.handleEarnings2015Change = this.handleEarnings2015Change.bind(this);
    this.handleEarnings2016Change = this.handleEarnings2016Change.bind(this);    
    }

    componentWillMount(){}

    handleNameChange(event) {
        this.setState(...this.state, {name: event.target.value});
    }

    handleTickerChange(event) {
        this.setState(...this.state, {ticker: event.target.value});
    }

    handlePriceChange(event) {
        this.setState(...this.state, {price: event.target.value});
    }

    handleAssetsChange(event) {
        this.setState(...this.state, {currentAssets: event.target.value});
    }

    handleLiabilitiesChange(event) {
        this.setState(...this.state, {currentLiabilities: event.target.value});
    }

    handleEarnings2014Change(event) {
        this.setState(...this.state, {earnings2014: event.target.value});
    }

    handleEarnings2015Change(event) {
        this.setState(...this.state, {earnings2015: event.target.value});
    }

    handleEarnings2016Change(event) {
        this.setState(...this.state, {earnings2016: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let name = this.state.name;
        let ticker = this.state.ticker;
        let price = this.state.price;
        
        let currentAssets = this.state.currentAssets;
        let currentLiabilities = this.state.currentLiabilities;
        let financialCondition = currentAssets > (1.5 * currentLiabilities);
        
        let earnings2014 = this.state.earnings2014;
        let earnings2015 = this.state.earnings2015;
        let earnings2016 = this.state.earnings2016;        
        let earningsStability = 0 < (earnings2016 || earnings2015 || earnings2014);        

        let score = Number(financialCondition);
        console.log(financialCondition);
        const self = this;
        axios.post(`/api/users/${this.props.currentUser._id}/stocks`, {
            name: name,
            ticker: ticker,
            price: price,
            currentAssets: currentAssets,
            currentLiabilities: currentLiabilities,
            financialCondition: financialCondition,
            earnings2014: earnings2014,
            earnings2015: earnings2015,
            earnings2016: earnings2016,
            earningsStability: earningsStability,
            score: score
        })
            .then(function (response) {
                console.log(response);
                self.setState({name: '', ticker: '', price: '', currentAssets: '', currentLiabilities: '', financialCondition: '', earnings2014: '', earnings2015: '', earnings2016: '', earningsStability: '', score: ''});
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
            if(event){
                this.props.history.push(`/myreport`)
            }
    }

    render() {
        const financialCondition = this.state.currentAssets > (1.5 * this.state.currentLiabilities);
        let earningsStability = 0 < (this.state.earnings2016 || this.state.earnings2015 || this.state.earnings2014);                
        const score = Number(financialCondition) + Number(earningsStability);
        return (
            <div className="container">
                <br/> {/* To give space between navbar and table */}
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <table className="table table-bordered">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">MAIN INFO</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" id="name" className="form-control" placeholder="name..." value={this.state.name} onChange={this.handleNameChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Ticker</td>
                            <td>
                                <input type="text" name="ticker" id="ticker" className="form-control" placeholder="ticker..." value={this.state.ticker} onChange={this.handleTickerChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Price</td>
                            <td>
                                <input type="text" name="price" id="price" className="form-control" placeholder="price..." value={this.state.price} onChange={this.handlePriceChange} />
                            </td>
                        </tr>
                        
                        
                            <tr>
                            <th scope="col">FINANCIAL CONDITION</th>
                            </tr>
                       
                        <tr>
                            <td>Current Assets</td>
                            <td>
                                <input type="text" name="currentAssets" id="currentAssets" className="form-control" placeholder="currentAssets..." value={this.state.currentAssets} onChange={this.handleAssetsChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Current Liabilities</td>
                            <td>
                                <input type="text" name="currentLiabilities" id="currentLiabilities" className="form-control" placeholder="currentLiabilities..." value={this.state.currentLiabilities} onChange={this.handleLiabilitiesChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Financial Condition</td>
                            <td>
                                <input type="text" name="financialCondition" id="financialCondition" className="form-control" value={financialCondition} disabled/>
                            </td>
                        </tr>

                        
                            <tr>
                            <th scope="col">EARNINGS STABILITY</th>
                            </tr>
                        
                        <tr>
                            <td>2014 Earnings</td>
                            <td>
                                <input type="text" name="earnings2014" id="earnings2014" className="form-control" placeholder="earnings2014..." value={this.state.earnings2014} onChange={this.handleEarnings2014Change} />
                            </td>
                        </tr>
                        <tr>
                            <td>2015 Earnings</td>
                            <td>
                                <input type="text" name="earnings2015" id="earnings2015" className="form-control" placeholder="earnings2015..." value={this.state.earnings2015} onChange={this.handleEarnings2015Change} />                                
                            </td>
                        </tr>
                        <tr>
                            <td>2016 Earnings</td>
                            <td>
                                <input type="text" name="earnings2016" id="earnings2016" className="form-control" placeholder="earnings2016..." value={this.state.earnings2016} onChange={this.handleEarnings2016Change} />                                
                            </td>
                        </tr>
                        <tr>
                            <td>Earnings Stability</td>
                            <td>
                                <input type="text" name="earningsStability" id="earningsStability" className="form-control" value={earningsStability} disabled/>
                            </td>
                        </tr>
                        
                        
                            <tr>
                            <th scope="col">----------------</th>
                            </tr>
                        
                        <tr>
                            <td>Score</td>
                            <td>
                                <input type="text" name="score" id="score" className="form-control" value={score} disabled/>                                
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary">Add Stock</button>                    
            </form>
        </div>
        )
    }
}

export default CreateStock