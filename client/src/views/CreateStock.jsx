import React from 'react'
import axios from 'axios'

class CreateStock extends React.Component {
    state = {
        fields: {
            name: '',
            ticker: '', 
            price: 0,
            currentAssets: 0,
            currentLiabilities: 0,
            financialCondition: '',            
            earningsStability: '',
            dividendRecord: '',
            earningsGrowth: '',
            valuePrice: '',
            score: '',
            currentLiabilitiesX2: '',
            question1Total: ''
        }
    }

    calculateFinancialCondition(evt){
        evt.preventDefault()
        //console.log(this.state.fields.currentLiabilities * this.state.fields.currentAssets) //calculation works
        var newFinancialCondition = 0
        newFinancialCondition = Number(this.state.fields.currentLiabilities) * Number(this.state.fields.currentAssets)
        console.log(newFinancialCondition)
        this.setState({
            fields: {
                financialCondition: Number(newFinancialCondition)
            }
        })
        console.log(this.state.fields.financialCondition.value)
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
                    valuePrice: '',
                    score: '',
                    currentAssets: '',
                    currentLiabilities: '',
                    currentLiabilitiesX2: '',
                    question1Total: ''
                }
            })
            if (event) {
                console.log(event)
                this.props.history.push(`/myreport`)
            }
        })
    }

    render() {
        const { name, ticker, price, earningsStability, dividendRecord, earningsGrowth, valuePrice, score, currentAssets, currentLiabilities, currentLiabilitiesX2, question1Total } = this.state.fields
        const financialCondition = this.state.fields.currentAssets * this.state.fields.currentLiabilities
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
                        <input type="number" placeholder="enter number" name="price" value={price} className="form-control"/>                    
                    </div>

                    <h5>Calculations</h5>
            {/* TEST HERE vvvvvvvv*/}
                    
                    <p>#1 - Are current assets at least 1 ½ times current liabilities? </p>
                    <div className="">
                        <p>Current assets:</p>                                                
                        <input type="number" placeholder="number" name="currentAssets" value={currentAssets} className=""/>                                      
               
                        <p>Current liabilities:</p>
                        <input type="number" placeholder="number" name="currentLiabilities" value={currentLiabilities} className=""/>  

                        <p>Financial Condition calculation (i.e. 1.5 X current liabilities):</p>
                        <input type="text" placeholder="" name="financialCondition" value={financialCondition} className="" disabled/> {/* added 'disabled' to protect calculation total from being changed before submit*/}

                        <button className="btn btn-secondary" onClick={this.calculateFinancialCondition.bind(this)} >Calculate Financial Condition</button>
                                                                      
                        {/* <p>1.5 X current liabilities:</p>                                               
                        <input type="number" placeholder="number" name="currentLiabilitiesX2" value={currentLiabilitiesX2} className=""/>     */}

                        {/* <p>Yes or No:</p>                                               
                        <input type="number" placeholder="yes or no" name="question1total" value={question1Total} className=""/>                     */}
                    </div>


            {/* TEST HERE ^^^^^ */}
            
            {/* commenting out the bottom now for testing */}
                    {/* <div className="form-group">
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
                    </div> */}
                    <br/>
                    <button type="submit" className="btn btn-primary">Add Stock</button>

                </form> 
            </div>
        )
    }
} //last bracket

export default CreateStock