import React from 'react'
import axios from 'axios'

class CreateStock extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        name: '',
        currentAssets: 0,
        currentLiabilities: 0,
        financialCondition: 0
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);    
    this.handleAssetsChange = this.handleAssetsChange.bind(this);
    this.handleLiabilitiesChange = this.handleLiabilitiesChange.bind(this);
    }

    componentWillMount(){}

    handleNameChange(event) {
        this.setState(...this.state, {name: event.target.value});
    }

    handleAssetsChange(event) {
        this.setState(...this.state, {currentAssets: event.target.value});
    }

    handleLiabilitiesChange(event) {
        this.setState(...this.state, {currentLiabilities: event.target.value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let name = this.state.name;
        let currentAssets = this.state.currentAssets;
        let currentLiabilities = this.state.currentLiabilities;
        let financialCondition = currentAssets * currentLiabilities;
        console.log(financialCondition);
        const self = this;
        axios.post(`/api/users/${this.props.currentUser._id}/stocks`, {
            name: name,
            currentAssets: currentAssets,
            currentLiabilities: currentLiabilities,
            financialCondition: financialCondition
        })
            .then(function (response) {
                console.log(response);
                self.setState({name: '', currentAssets: '', currentLiabilities: '', total: ''});
            })
            .catch(function (error) {
                console.log(error.response.data);
            });
    }

    render() {
        const financialCondition = this.state.currentAssets * this.state.currentLiabilities;
        return (
            <div className="container">
                <form className="container" onSubmit={this.handleFormSubmit}>
                    <table className="table table-bordered">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>
                                <input type="text" name="name" id="name" className="form-control" placeholder="name..." value={this.state.name} onChange={this.handleNameChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Current Assets</td>
                            <td>
                                <input type="text" name="currentAssets" id="currentAssets" className="form-control" placeholder="currentAssets..." value={this.state.currentAssets} onChange={this.handleAssetsChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Current Liabilities</td>
                            <td>
                                <input type="text" name="currentLiabilities" id="currentLiabilities" className="form-control" placeholder="currentLiabilities..." value={this.state.currentLiabilities} onChange={this.handleLiabilitiesChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Financial Condition</td>
                            <td>
                                <input type="text" name="financialCondition" id="financialCondition" className="form-control" value={financialCondition} />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary">Add Stock</button>                    
            </form>
        </div>
        )
    }
}

export default CreateStock