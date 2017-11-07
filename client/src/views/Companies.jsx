import React from 'react'

class Companies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: {name: "ABC", ticker: "A", price: 99}
        };
    }
    
    render() {
        console.log(this.state.companies)
        return(
        <div className='companies'> 
            <h1>Company Stocks</h1>
            
            <div>Search Bar Here</div>

            <div className='company'>
           
            <dl>
                <dt>ABC</dt>
                    <dd>Ticker: A</dd>                    
                    <dd>Price: $99</dd>
                    <br/>
                <dt>CBS</dt>
                    <dd>Ticker: C</dd>                    
                    <dd>Price: $5</dd>
                    <br/>
            </dl>

            </div>
        </div>
        )
    }
}
export default Companies

/*
import React from 'react'

class Companies extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        this.setState({
            currentUser: this.props.currentUser
        })
    }
    
    render() {
        return (
            <div className='companies'>
                <h1>Companies Page</h1>
            </div>
        )
    }
}

export default Companies
*/