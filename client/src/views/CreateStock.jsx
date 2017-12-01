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

    handleFormSubmit(event) {
        event.preventDefault();
        let name = this.state.name;
        let ticker = this.state.ticker;
        let price = this.state.price;
        let currentAssets = this.state.currentAssets;
        let currentLiabilities = this.state.currentLiabilities;
        let financialCondition = currentAssets > (1.5 * currentLiabilities);
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
            score: score
        })
            .then(function (response) {
                console.log(response);
                self.setState({name: '', ticker: '', price: '', currentAssets: '', currentLiabilities: '', financialCondition: '', score: ''});
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
        const score = Number(financialCondition);
        return (
            <div className="container">
                <br/> {/* To give space between navbar and table */}
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <table className="table table-bordered">
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