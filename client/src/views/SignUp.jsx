import React from 'react'
import clientAuth from '../clientAuth'

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
                this.props.history.push('/')
            }
        })
    }

    render() {
        const { email, password } = this.state.fields
        return (
            <div className='SignUp'>
                <h1>Sign Up</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" placeholder="Email" name="email" value={email} />
                    <input type="password" placeholder="Password" name="password" value={password} />                   
                    <button>Create Account</button> 
                </form>
            </div>
        )
    }
}

export default SignUp