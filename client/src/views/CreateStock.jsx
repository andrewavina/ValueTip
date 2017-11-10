import React from 'react'
import axios from 'axios'

class CreateStock extends React.Component {
    state = {
        fields: {
            name: '',
            ticker: '', 
            price: '',
            financialCondition: '',
            earningsStability: '',
            dividendRecord: '',
            earningsGrowth: '',
            valuePrice: ''
        }
    }

    onInputChange(evt) {
        this.setState({
            fields: {
                ...this.state.fields,
                [evt.target.name]: evt.target.value
            }
        })
    }

    onFormSubmit(evt) {
        evt.preventDefault()
        axios({
            method: 'post',
            url: `/api/users/${this.props.currentUser._id}/stocks`,
            data: this.state.fields
        }).then((event) => {
            this.setState({
                fields: {
                    name: '',
                    ticker: '', 
                    price: '',
                    financialCondition: '',
                    earningsStability: '',
                    dividendRecord: '',
                    earningsGrowth: '',
                    valuePrice: ''
                }
            })
            if (event) {
                console.log(event)
                this.props.history.push('/myreport')
            }
        })
    }

    render() {
        const { name, ticker, price, financialCondition, earningsStability, dividendRecord, earningsGrowth, valuePrice } = this.state.fields
        return (
            <div className='CreateStock'>
                <h1>Add A Stock</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <label >Company Name</label>
                        <input type="text" placeholder="company" name="name" value={name} className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label >Stock Ticker</label>                        
                        <input type="text" placeholder="ticker" name="ticker" value={ticker} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label >Price Per Share</label>                                                
                        <input type="text" placeholder="enter number" name="price" value={price} className="form-control"/>                    
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

                    <button type="submit" className="btn btn-primary">Add Stock</button>

                </form> 
            </div>
        )
    }
} //last bracket

export default CreateStock