import React from 'react'
import axios from 'axios'

class EditStock extends React.Component {
    state = {
        fields: {
            name: '',
            ticker: '', 
            price: '',
            financialCondition: '',
            earningsStability: '',
            dividendRecord: '',
            earningsGrowth: '',
            valuePrice: '',
            score: ''
        }
    }

    onInputChange(evt){
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }

    componentDidMount(){
        const { id } = this.props.match.params
        axios({
            method: 'get',
            url: `/api/stocks/${id}`
        }).then((res) => {
            this.setState({
                fields: {
                    name: '',
                    ticker: '', 
                    price: '',
                    financialCondition: '',
                    earningsStability: '',
                    dividendRecord: '',
                    earningsGrowth: '',
                    valuePrice: '',
                    score: ''
                }
            })
        })
    }

    onFormSubmit(evt){
        evt.preventDefault()
        const { id } = this.props.match.params
        axios({
            method: 'patch',
            url: `/api/stocks/${id}`,
            data: this.state.fields
        }).then((res) => {
            this.setState({
                fields: {
                    name: '',
                    ticker: '', 
                    price: '',
                    financialCondition: '',
                    earningsStability: '',
                    dividendRecord: '',
                    earningsGrowth: '',
                    valuePrice: '',
                    score: ''
                }
            })
            if (evt) {
                console.log(evt)
                this.props.history.push(`/myreport`)
            }
        })
    }

    render() {
        const { name, ticker, price, financialCondition, earningsStability, dividendRecord, earningsGrowth, valuePrice, score } = this.state.fields
        return (
            <div className='EditStock'>
                <h1>Edit Stock</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Company Name</label>                        
                        <input type="text" placeholder="company" name="name" value={name} class="form-control"/>
                    </div>

                    <div class="form-group">                    
                        <label for="exampleInputEmail1">Stock Ticker</label>
                        <input type="text" placeholder="ticker" name="ticker" value={ticker} class="form-control"/>
                    </div>

                    <div class="form-group">                    
                        <label for="exampleInputEmail1">Price Per Share</label>                        
                        <input type="text" placeholder="enter number" name="price" value={price} class="form-control"/>                   
                    </div>

                    <h5>Enter "Yes" or "No" for questions below:</h5>

                    <div className="form-group">
                        <label>Financial Condition</label>                                                
                        <input type="text" placeholder="(a) Current assets at least 1 ½ times current liabilities, and (b) debt not more than 110% of net current assets (for industrial companies)" name="financialCondition" value={financialCondition} className="form-control"/>                    
                    </div>

                    <div className="form-group">
                        <label>Earnings Stability</label>                                                
                        <input type="text" placeholder="No deficit in the last five years covered in the stock guide" name="earningsStability" value={earningsStability} className="form-control"/>                    
                    </div>

                    <div className="form-group">
                        <label>Dividend Record</label>                                                
                        <input type="text" placeholder="Some current dividend" name="dividendRecord" value={dividendRecord} className="form-control"/>                    
                    </div>

                    <div className="form-group">
                        <label>Earnings Growth</label>                                                
                        <input type="text" placeholder="Last year’s earnings more than those of each over last 3 years" name="earningsGrowth" value={earningsGrowth} className="form-control"/>                    
                    </div>

                    <div className="form-group">
                        <label>Value Price</label>                                                
                        <input type="text" placeholder="Less than 120% net tangible assets" name="valuePrice" value={valuePrice} className="form-control"/>                    
                    </div>

                    <h5>Now tally up all the "Yes" entries from above:</h5>
                    <div className="form-group">
                        <label>Score</label>                                                
                        <input type="text" placeholder="Enter number" name="score" value={score} className="form-control"/>                    
                    </div>

                    <button class="btn btn-success">Update Stock</button>
                </form>
            </div>
        )
    }

} //last bracket

export default EditStock