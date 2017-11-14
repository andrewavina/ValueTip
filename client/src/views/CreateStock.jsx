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
            valuePrice: '',
            score: '',
            currentAssets: '',
            currentLiabilities: ''
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
        //1 piece
        evt.preventDefault()
        
        //CALCULATIONS
            //need to turn values into Numbers since they are strings they don't caluclate. Use Number(). Works with decimals as well.
            //EXAMPLE    
                // var price = Number(this.state.fields.price)
                // var add = Number(this.state.fields.valuePrice)
                // var total = price + add
                // console.log(total)
            var l = Number(this.state.fields.currentLiabilities)
            var a = Number(this.state.fields.currentAssets)
            var multiplier = l * l //works
            var outcome = function(){
                if (a > multiplier){
                    console.log("yes")
                } else {console.log("no")}
            }
            outcome()
          
        //3rd piece
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
                    currentLiabilities: ''
                }
            })
            if (event) {
               // console.log(event)
                this.props.history.push('/myreport')
            }
        })
    }

    render() {
        // console.log(this.state.fields.currentAssets + this.state.fields.currentLiabilities)        
        const { name, ticker, price, financialCondition, earningsStability, dividendRecord, earningsGrowth, valuePrice, score, currentAssets, currentLiabilities } = this.state.fields
       
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
                    <p>#1 - (a) Current assets at least 1 ½ times current liabilities, and (b) debt not more than 110% of net current assets (for industrial companies)</p>
                    {/* 1st input */}
                    <div className="">
                        <label> Are current assets: </label>                                                
                        <input type="number" placeholder="input number" name="currentAssets" value={currentAssets} className=""/>                                      
                    
                    {/* 2nd input */}
                   
                        <label> 1.5X greater than current liabilities: </label>                                                
                        <input type="number" placeholder="input number" name="currentLiabilities" value={currentLiabilities} className=""/>                    
                        <label> ? </label>                                                
                       

                    {/* TOTAL */}
                        <label> Auto-calculation of 1.5 X current liabilities: </label>                                                
                        <input type="number" placeholder="auto-calculate number" name="question1total" className=""/>                    
                        <label> ? </label>
                    </div>

                    {/* Outcome = yes or now */}
                    <div>
                        <label>Yes or No? (calculate if CA > 1.5X CL</label>                                                
                        <input type="text" placeholder="auto yes or no?" name="financialCondition" value={financialCondition} className=""/>                    
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

                    <button type="submit" className="btn btn-primary">Add Stock</button>

                </form> 
            </div>
        )
    }
} //last bracket

export default CreateStock