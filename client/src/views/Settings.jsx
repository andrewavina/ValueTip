import React from 'react'
import clientAuth from '../clientAuth'

class Settings extends React.Component {
    state = {
        fields: { password: ''}
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
        //console.log(this.props.currentUser) //testing
        clientAuth.editUser(this.props.currentUser).then(res => {
            console.log(res)   //testing                 
            this.setState({ fields: { password: '' } })
            if(res.password) {
                this.props.onEditSuccess(res.password)
                this.props.history.push('/myreport')
                console.log(res.message)
            }
        })
    }

    render() {
        const { password } = this.state.fields 
            return (
                <div className='settings'>
                    <h1>Settings</h1>

                    <h2>Edit Password:</h2>
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="password" placeholder="Password" name="password" value={password} />                                     
                        <button>Change Password</button>
                    </form>

                    <br/>
                    
                    <h2>Delete Your Account:</h2>                    
                    <button>
                        <a href="/deleteuser">Delete Account</a>
                    </button>
                </div>
            )
    }
}

export default Settings