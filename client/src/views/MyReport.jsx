import React from 'react';
import Item from './Stock';

class MyReport extends React.Component {
    
    state = {
        newCompanyTitle: '', 
        stocklist: [
            { company: "ABC", ticker: "A", price: 34, _id: "293023" },
            { company: "CBS", ticker: "C", price: 183, _id: "123211" },
            { company: "NBC", ticker: "N", price: 8, _id: "423232" }            
        ]
    }

  
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
        this.setState({search: evt.target.value})
    }

    onRemoveClick(id){
        console.log("removing an item...")
        console.log(id)
        this.setState({
            stocklist: this.state.stocklist.filter((item) => {
                return item._id !== id
            }) //filter is similar to map. Only items that include truthy will be included in new array
        })
    }

    render() {
        let filteredCompanies = this.state.stocklist.filter(
            (stock) => {
                return stock.company.indexOf(this.state.search) !== -1;
            }
        )
        return (
            <div className="MyReport">
                <h1>My Report</h1>

                <h2>Company Search:</h2>
               <form onSubmit={this.onFormSubmit.bind(this)}>
                    {/* <input type="text" 
                        value={this.state.search}
                        onChange={this.onInputChange.bind(this)}
                     /> */}
                    <button>Add Stock</button>
                </form>

                <h2>Saved Stocks:</h2>
                
                <ul>
                   {/* placeholder for saved/bookmarked stocks */}
                </ul>

                {/* Below is test list to render list of stocks just for testing */}
                {/* <ul>
                    {this.state.stocklist.map((item) => { 
                        return (
                            <Item 
                                key={item._id}
                                item={item}
                                onRemoveClick={this.onRemoveClick.bind(this)}
                            />
                        )
                    })}
                </ul> */}
            </div>
        )
    }
    
} // last bracket

export default MyReport