import React from 'react'
import axios from 'axios'

class EditStock extends React.Component {
    state = {
        fields: {
            name: '',
            ticker: '',
            price: ''
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
                    name: res.data.name,
                    ticker: res.data.ticker,
                    price: res.data.price
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
                    price: ''
                }
            })
            if (evt) {
                console.log(evt)
                this.props.history.push(`/myreport`)
            }
        })
    }

    render() {
        const {name, ticker, price} = this.state.fields
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

                    <button class="btn btn-success">Update Stock</button>
                </form>
            </div>
        )
    }

} //last bracket

export default EditStock