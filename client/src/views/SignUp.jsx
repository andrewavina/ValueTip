import React from 'react'
import clientAuth from '../clientAuth'
import { Link } from 'react-router-dom'


// sign up for behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
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
            <div className='SignUp login-fields'>
                <h1>Sign Up</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                <div className="form-group">
                <label>Email</label>
                <input type="text" placeholder="Email" name="email" value={email} className="form-control"/>
                </div>
            
                <div className="form-group">
                    <label>Password</label>                        
                    <input type="password" placeholder="Password" name="password" value={password} className="form-control"/>
                </div>

                    <button className="btn btn-outline-success">Create Account</button>
                </form>
                <hr className="my-4"/>
                <label>Already have an account?</label>                                        
                    <Link to="/login">
                    <button type="button" className="btn btn-outline-primary">Login</button>                        
                    </Link>
            </div>
        )
    }
}

export default SignUp