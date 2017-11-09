
import React from 'react'
import MyReport from './MyReport'

class Search extends React.Component {
    
    //functions:
    onFormSubmit(evt) {
        console.log("Submitting form...")
        evt.preventDefault()
        this.setState({
            newItemTitle: '',
            stocklist: [
                ...this.state.stocklist,
                { company: this.state.newItemTitle, _id: Math.random() * 10000 }
            ]
        })
    }

    // use bind(this) in render() function to tell react to access function
    onInputChange(evt){
        this.setState({newItemTitle: evt.target.value})
    }

    render () {
        console.log()        
        return (
            //search bar
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" 
                    value={this.state.newItemTitle}
                    onChange={this.onInputChange.bind(this)}
                    />
                <button>Add Stock</button>
            </form>
        )
    }
    
} //last bracket

export default Search