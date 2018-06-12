import React from 'react'
import axios from 'axios'

class CreateStock extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        //general info
        name: '',
        ticker: '',
        price: '',
        // targetPrice: '',
        date: '',        
        //#1 - Financial Condition        
        currentAssets: '',
        currentLiabilities: '',
        financialCondition: '',
        //#2 - Earnings Stability
        earnings2014: '',
        earnings2015: '',
        earnings2016: '',
        earningsStability: '',
        //#3 - Earnings Growth (can use the earnings2014... already entered)
        earningsGrowth: '',
        //#4 - Dividend Record        
        isThereDividend: '',
        dividendRecord: '',
        //#5 - Value Price
        netTangibleAssets: '',
        outstandingShares: '',
        valuePrice: '',
        //Final Score
        score: 0
    };

    //what happens after submit button clicked
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    
    //fields' values from changes to input fields
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleTickerChange = this.handleTickerChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);    
    this.handleAssetsChange = this.handleAssetsChange.bind(this);
    this.handleLiabilitiesChange = this.handleLiabilitiesChange.bind(this);
    this.handleEarnings2014Change = this.handleEarnings2014Change.bind(this);
    this.handleEarnings2015Change = this.handleEarnings2015Change.bind(this);
    this.handleEarnings2016Change = this.handleEarnings2016Change.bind(this);      
    this.handleIsThereDividendChange = this.handleIsThereDividendChange.bind(this);
    this.handleNetTangibleAssetsChange = this.handleNetTangibleAssetsChange.bind(this);
    this.handleOutstandingSharesChange = this.handleOutstandingSharesChange.bind(this);
    } //end bracket of constructor

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

    handleDateChange(event) {
        this.setState(...this.state, {date: event.target.value});
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

    handleIsThereDividendChange(event) {
        this.setState(...this.state, {isThereDividend: event.target.value});        
    }

    handleNetTangibleAssetsChange(event) {
        this.setState(...this.state, {netTangibleAssets: event.target.value});
    }
    
    handleOutstandingSharesChange(event) {
        this.setState(...this.state, {outstandingShares: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let name = this.state.name;
        let ticker = this.state.ticker;
        let price = this.state.price;
        // let targetPrice = Number(Number(price) + Number(price * 0.4)).toFixed(2);
        let date = this.state.date;        
        
        let currentAssets = this.state.currentAssets;
        let currentLiabilities = this.state.currentLiabilities;
        let financialCondition = currentAssets > (1.5 * currentLiabilities);
        
        let earnings2014 = this.state.earnings2014;
        let earnings2015 = this.state.earnings2015;
        let earnings2016 = this.state.earnings2016;        
        let earningsStability = earnings2016 > 0 && earnings2015 > 0 && earnings2014 > 0;                   

        let earningsGrowth = earnings2015 > earnings2014 && earnings2016 > earnings2015        
           
        let isThereDividend = this.state.isThereDividend;
        let dividendRecord = this.state.isThereDividend > 0;
        
        let netTangibleAssets = this.state.netTangibleAssets;
        let outstandingShares = this.state.outstandingShares;
        let valuePrice = ((netTangibleAssets / outstandingShares) * 1.2) > price

        let score = Number(financialCondition) + Number(earningsStability) + Number(earningsGrowth) + Number(dividendRecord) + Number(valuePrice);        

        const self = this;
        axios.post(`/api/users/${this.props.currentUser._id}/stocks`, {
            name: name,
            ticker: ticker,
            price: price,
            // targetPrice: targetPrice,
            date: date,            
            currentAssets: currentAssets,
            currentLiabilities: currentLiabilities,
            financialCondition: financialCondition,
            earnings2014: earnings2014,
            earnings2015: earnings2015,
            earnings2016: earnings2016,
            earningsStability: earningsStability,
            earningsGrowth: earningsGrowth,
            isThereDividend: isThereDividend,            
            dividendRecord: dividendRecord,
            netTangibleAssets: netTangibleAssets,
            outstandingShares: outstandingShares,
            valuePrice: valuePrice,
            score: score
        })
            .then((response) => {
                // console.log(response);
                self.setState({name: '', ticker: '', price: '', date: '', currentAssets: '', currentLiabilities: '', financialCondition: '', earnings2014: '', earnings2015: '', earnings2016: '', earningsStability: '', earningsGrowth: '', isThereDividend: '', dividendRecord: '', netTangibleAssets: '', outstandingShares:'', valuePrice: '', score: ''});
                this.props.history.push(`/myreport`)
            })
            .catch((error) => {  
                console.log(error.response.data);
            });
    }

    render() {
        // let targetPrice = Number(Number(this.state.price) + Number(this.state.price * 0.4)).toFixed(2);

        const financialCondition = this.state.currentAssets > (1.5 * this.state.currentLiabilities);
           
        let earningsStability = this.state.earnings2016 > 0 && this.state.earnings2015 > 0 && this.state.earnings2014 > 0;           

        let earningsGrowth = this.state.earnings2015 > this.state.earnings2014 && this.state.earnings2016 > this.state.earnings2015; 

        let isThereDividend = this.state.isThereDividend
        let dividendRecord = isThereDividend > 0

        let valuePrice = ((this.state.netTangibleAssets / this.state.outstandingShares) * 1.2) > this.state.price;         

        const score = Number(financialCondition) + Number(earningsStability) + Number(earningsGrowth) + Number(dividendRecord) + Number(valuePrice);
        
        return (
            <div className="CreateStock">   
             
                <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner" >
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center">
                                <div className="row row-mt-15em">
                                    <div className="col-md-12 mt-text " data-animate-effect="fadeInUp">
                                        <h1>Add a Stock</h1>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="gtco-section">
                    <div className="gtco-container">
                        
                        <form className="container create-stock-table" onSubmit={this.handleFormSubmit}>
                            <table className="table table-bordered">
                                <thead className="thead-dark">
                                    <tr>
                                    <th scope="col">GENERAL INFO</th>
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
                                        <input type="number" name="price" id="price" className="form-control" placeholder="dollar amount..." value={this.state.price} onChange={this.handlePriceChange} />
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>Target Price (40% growth)</td>
                                    <td>
                                        <input type="number" name="targetPrice" id="targetPrice" className="form-control" value={targetPrice} disabled/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Date of Price Point</td>
                                    <td>
                                        <input type="text" name="date" id="date" className="form-control" placeholder="date..." value={this.state.date} onChange={this.handleDateChange} />
                                    </td>
                                </tr>
                                
                                <tr className="thead-dark">
                                <th scope="col">FINANCIAL CONDITION</th>
                                </tr>
                            
                                <tr>
                                    <td>Current Assets</td>
                                    <td>
                                        <input type="number" name="currentAssets" id="currentAssets" className="form-control" placeholder="dollar amount..." value={this.state.currentAssets} onChange={this.handleAssetsChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Current Liabilities</td>
                                    <td>
                                        <input type="number" name="currentLiabilities" id="currentLiabilities" className="form-control" placeholder="dollar amount..." value={this.state.currentLiabilities} onChange={this.handleLiabilitiesChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Financial Condition</td>
                                    <td>
                                        <input type="text" name="financialCondition" id="financialCondition" className="form-control" value={financialCondition} disabled/>
                                    </td>
                                </tr>

                                
                                <tr className="thead-dark">
                                <th scope="col">EARNINGS STABILITY</th>
                                </tr>
                                
                                <tr>
                                    <td>2014 Earnings</td>
                                    <td>
                                        <input type="number" name="earnings2014" id="earnings2014" className="form-control" placeholder="dollar amount..." value={this.state.earnings2014} onChange={this.handleEarnings2014Change} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>2015 Earnings</td>
                                    <td>
                                        <input type="number" name="earnings2015" id="earnings2015" className="form-control" placeholder="dollar amount..." value={this.state.earnings2015} onChange={this.handleEarnings2015Change} />                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>2016 Earnings</td>
                                    <td>
                                        <input type="number" name="earnings2016" id="earnings2016" className="form-control" placeholder="dollar amount..." value={this.state.earnings2016} onChange={this.handleEarnings2016Change} />                                
                                    </td>
                                </tr>
                                <tr>
                                    <td>Earnings Stability</td>
                                    <td>
                                        <input type="text" name="earningsStability" id="earningsStability" className="form-control" value={earningsStability} disabled/>
                                    </td>
                                </tr>

                                <tr className="thead-dark">
                                    <th scope="col">EARNINGS GROWTH</th>
                                </tr>
                                    <tr>
                                        <td>Earnings Growth</td>
                                        <td>
                                            <input type="text" name="earningsGrowth" id="earningsGrowth" className="form-control" value={earningsGrowth} disabled/>
                                        </td>
                                    </tr>

                                <tr className="thead-dark">
                                    <th scope="col">DIVIDEND</th>
                                </tr>
                                <tr>
                                    <td>Dividend Amount:</td>
                                    <td>
                                        <input type="number" name="isThereDividend" id="isThereDividend" className="form-control" placeholder="dollar amount..." value={this.state.isThereDividend} onChange={this.handleIsThereDividendChange} />                                
                                    </td>
                                </tr>
                                <tr className="thead-dark">
                                    <td>Dividend:</td>
                                    <td>
                                        <input type="text" name="dividendRecord" id="dividendRecord" className="form-control" value={dividendRecord} disabled/>
                                    </td>
                                </tr>


                                <tr className="thead-dark">
                                    <th scope="col">VALUE PRICE</th>
                                </tr>
                                    <tr>
                                        <td>Net Tangible Assets</td>
                                        <td>
                                            <input type="number" name="netTangibleAssets" id="netTangibleAssets" className="form-control" placeholder="dollar amount..." value={this.state.netTangibleAssets} onChange={this.handleNetTangibleAssetsChange} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Outstanding Shares</td>
                                        <td>
                                            <input type="number" name="oustandingShares" id="oustandingShares" className="form-control" placeholder="number..." value={this.state.oustandingShares} onChange={this.handleOutstandingSharesChange} />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Value Price</td>
                                        <td>
                                            <input type="text" name="valuePrice" id="valuePrice" className="form-control" value={valuePrice} disabled/>
                                        </td>
                                    </tr>

                                <tr className="thead-dark">
                                <th scope="col"></th>
                                </tr>
                                
                                <tr>
                                    <td>Score</td>
                                    <td>
                                        <input type="text" name="score" id="score" className="form-control" value={score} disabled/>                                
                                    </td>
                                </tr> */}
                                </tbody>
                            </table>
                            <button type="submit" className="btn btn-primary">Add Stock</button>                    
                    </form>
                    </div>
                </div>
        </div> //LAST div
        )
    }
}

export default CreateStock