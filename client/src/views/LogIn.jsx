import React from 'react'
import clientAuth from '../clientAuth'
import { Link } from 'react-router-dom'

class LogIn extends React.Component {
    state = {
        fields: { email: '', password: '' }
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
        clientAuth.logIn(this.state.fields).then(user => {
            this.setState({ fields: { email: '', password: '' } })
            if(user) {
                this.props.onLoginSuccess(user)
                this.props.history.push('/myreport')
            }
        })
    }

    render() {
        const { email, password } = this.state.fields
        return (
            <div className="LogIn">
                <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner" >
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-center">
                                <div className="row row-mt-15em">
                                    <div className="col-md-12 mt-text " data-animate-effect="fadeInUp">
                                        <h1>Log In</h1>	
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                
                {/* New */}
                <div className="gtco-section">
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <label >Enter Email</label>
                                            <input type="text" placeholder="Email" name="email" value={email} className="form-control"></input>
                                        </div>
                                        <div className="col-md-12">
                                            <label >Enter Password</label>
                                            <input type="password" placeholder="Password" name="password" value={password} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary">Log In</button>                                            																	
                                        </div>
                                    </div>
                                </form>		
                                <label>Don't have an account?</label>                                  
                                <Link to="/">
                                <button type="button" className="btn btn-outline-success">Sign Up</button>                        
                                </Link>			                                          
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn