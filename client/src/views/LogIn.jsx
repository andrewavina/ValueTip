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
            <div className='LogIn'>
                <h1>Login</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Email" name="email" value={email} className="form-control"/>
                    </div>
                    
                    <div className="form-group">
                        <label>Password</label>                        
                        <input type="password" placeholder="Password" name="password" value={password} className="form-control"/>
                    </div>

                    <button className="btn btn-outline-primary">Login</button>
                </form>
                <hr className="my-4"/>
                <label>Don't have an account?</label>                                  
                    <Link to="/signup">
                    <button type="button" class="btn btn-outline-success">Sign Up</button>                        
                    </Link>
            </div>
        )
    }
}

export default LogIn