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
                    <input type="text" placeholder="Company Name" name="name" value={name} />
                    <input type="text" placeholder="Stock Ticker" name="ticker" value={ticker} />
                    <input type="text" placeholder="Price Per Share" name="price" value={price} />                    
                    <button>Add Stock</button>
                </form> 
            </div>
        )
    }
} //last bracket

export default CreateStock