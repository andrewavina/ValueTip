import React from 'react'
import clientAuth from '../clientAuth'
import { Link } from 'react-router-dom'

class Home extends React.Component {
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
        clientAuth.signUp(this.state.fields).then(user => {
            this.setState({ fields: { email: '', password: '' } })
            if(user) {
                this.props.onSignUpSuccess(user)
                this.props.history.push('/myreport')
            }
        })
    }

    render() {
        const { email, password } = this.state.fields        
        return (
            <div className='Home'>  
                <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" >
                    <div className="overlay"></div>
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 text-left">
                                <div className="row row-mt-15em">
                                    <div className="col-md-7 mt-text " data-animate-effect="fadeInUp">
                                        <h1>Discovery aid for the value investor</h1>	
                                    </div>
                                    <div className="col-md-4 col-md-push-1 " data-animate-effect="fadeInRight">
                                        <div className="form-wrap">
                                            <div className="tab">
                                                
                                            {this.props.currentUser
                                                ? (
                                                <div className="tab-content">
                                                    <div className="tab-content-inner active" data-content="signup">
                                                        <h3>Start Researching</h3>
                                                        <form action="#">
                                                            <div className="row form-group">
                                                                <div className="col-md-12">
                                                                    <Link to="/myreport"><button className="btn btn-primary btn-block">My Report</button></Link>
                                                                </div>
                                                            </div>
                                                        </form>	
                                                    </div>
                                                </div>
                                                
                                                )
                                                : (
                                                <div className="tab-content">
                                                    <div className="tab-content-inner active" data-content="signup">
                                                        <h3>Sign Up</h3>
                                                        <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                                                            <div className="row form-group">
                                                                <div className="col-md-12">
                                                                    <label>Email</label>
                                                                    <input type="text" placeholder="Email" name="email" value={email} className="form-control"></input>
                                                                </div>
                                                            </div>
                                                            <div className="row form-group">
                                                                <div className="col-md-12">
                                                                    <label>Password</label>
                                                                    <input type="password" placeholder="Password" name="password" value={password} className="form-control"></input>
                                                                </div>
                                                            </div>
                                                            <div className="row form-group">
                                                                <div className="col-md-12">
                                                                    <input type="submit" className="btn btn-primary btn-block"></input>
                                                                </div>
                                                            </div>
                                                        </form>	
                                                    </div>
                                                </div>
                                                )
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="gtco-features">
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center gtco-heading ">
                                <h2>How It Works</h2>
                                <p>Start logging and tracking your watchlist of stocks.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-sm-6">
                                <div className="feature-center " data-animate-effect="fadeIn">
                                    <span className="icon">
                                        <i className="icon-bookmark"></i>
                                    </span>
                                    <h3>Bookmark</h3>
                                    <p>Save time searching by easily keeping track of stocks.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="feature-center " data-animate-effect="fadeIn">
                                    <span className="icon">
                                        <i className="icon-calculator"></i>							
                                    </span>
                                    <h3>Auto-Calculate</h3>
                                    <p>Get calculations on key value investment factors done for you.</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <div className="feature-center " data-animate-effect="fadeIn">
                                    <span className="icon">
                                        <i className="icon-sports-club"></i>							
                                    </span>
                                    <h3>Scoring</h3>
                                    <p>Quick way to see summary of all initial calculations and analysis.</p>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
                
            </div> //last div
        )
    }
}

export default Home