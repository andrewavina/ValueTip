import React from 'react';
import Item from '../Stock';
//import Autosuggest from 'react-autosuggest';

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
        this.setState({newItemTitle: evt.target.value})
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
        return (
            <div className="MyReport">
                <h1>My Report</h1>

                <h2>Company Search:</h2>
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" 
                        value={this.state.newItemTitle}
                        onChange={this.onInputChange.bind(this)}
                     />
                    <button>Add Stock</button>
                </form>

                <h2>Saved Stocks:</h2>
                <ul>
                    {this.state.stocklist.map((item) => { 
                        return (
                            <Item 
                                key={item._id}
                                item={item}
                                onRemoveClick={this.onRemoveClick.bind(this)}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
    
} // last bracket

/*
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'ABC'
  },
  {
    name: 'CBS'
  },
  {
    name: 'NBC'
  },
  {
    name: 'NBdfadfC'
  },
  {
    name: 'NdafdfaBC'
  },
  {
    name: 'NrergarBC'
  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class MyReport extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Search for a Company',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <div>
        <h1>My Report</h1>
        <p>this is autosuggest:</p>
        <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
        />
        <hr/>
        <p>this is my custom form:</p>
        <form action="">
            <input type="text" name="company" placeholder="company"/>
        </form>
        <br/>
            <h2>Saved Stocks</h2>
            <div className='savedStocks'>

            </div>
      </div>
    );
  }
}
*/
export default MyReport