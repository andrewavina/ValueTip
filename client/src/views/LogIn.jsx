import React from 'react'
import clientAuth from '../clientAuth'

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
                <h1>Log in</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" placeholder="Email" name="email" value={email} class="form-control"/>
                    </div>
                    
                    <div class="form-group">
                        <label>Password</label>                        
                        <input type="password" placeholder="Password" name="password" value={password} class="form-control"/>
                    </div>

                    <button class="btn btn-primary">Log In</button>
                </form>
            </div>
        )
    }
}

export default LogIn