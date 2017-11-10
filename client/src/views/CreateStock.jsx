import React from 'react'
import axios from 'axios'

class CreateStock extends React.Component {
    state = {
        fields: {
            name: '',
            ticker: '', 
            price: ''
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
                    price: ''
                }
            })
            if (event) {
                console.log(event)
                this.props.history.push('/myreport')
            }
        })
    }

    render() {
        const { name, ticker, price } = this.state.fields
        return (
            <div className='CreateStock'>
                <h1>Add A Stock</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Company Name</label>
                        <input type="text" placeholder="company" name="name" value={name} className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label for="exampleInputEmail1">Stock Ticker</label>                        
                        <input type="text" placeholder="ticker" name="ticker" value={ticker} className="form-control"/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputEmail1">Price Per Share</label>                                                
                        <input type="text" placeholder="enter number" name="price" value={price} className="form-control"/>                    
                    </div>

                    <button type="submit" className="btn btn-primary">Add Stock</button>

                </form> 
            </div>
        )
    }
} //last bracket

export default CreateStock