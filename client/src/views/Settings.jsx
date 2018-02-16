import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Settings extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fields: {
                email: props.currentUser.email,
                password: props.currentUser.password
            }
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

    onFormSubmit(evt){
        evt.preventDefault()
        axios({
            method: 'patch',
            url: `/api/users/${this.props.currentUser._id}`,
            data: this.state.fields
        }).then((user) => {
            this.setState({
                fields: {
                    password: ''
                }
            })
            if (user) 
                //  console.log(user)
                 this.props.history.push('/myreport')
        })
    }

    render() {
        const { password } = this.state.fields 
            return (
                <div className='settings'>
                    <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner">
                        <div className="overlay"></div>
                        <div className="gtco-container">
                            <div className="row">
                                <div className="col-md-12 col-md-offset-0 text-center">
                                    <div className="row row-mt-15em">
                                        <div className="col-md-12 mt-text" data-animate-effect="fadeInUp">
                                            <h1>Settings</h1>	
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    
                    <div className="gtco-section">
                        <div className="gtco-container">
                            <div className="row">
                                <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                                    <h2>Change Password</h2>
                                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <label >Enter New Password</label>
                                                <input type="password" placeholder="Password" name="password" defaultValue={password} className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-md-12">
                                                <button className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>					
                                    <h2>Delete Account</h2>
                                    <div className="row form-group">
                                        <Link to="/deleteuser">
                                            <button className="btn btn-danger">Delete Account </button>
                                        </Link> 										
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
} 

export default Settings
