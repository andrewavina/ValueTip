import React from 'react'
import axios from 'axios'

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
                 console.log(user)
                 this.props.history.push('/myreport')
        })
    }

    render() {
        const { password } = this.state.fields 
            return (
                <div className='settings'>
                    <h1>Settings</h1>
                    
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                        <div className="form-group">
                            <label for="exampleInputPassport1">Enter New Password</label>
                            <input type="password" placeholder="Password" name="password" defaultValue={password} className="form-control"/>                                     
                        </div>
                        <button className="btn btn-primary">Change Password</button>
                    </form>

                    <br/>
                    <hr/>
                    <h2>Delete Your Account:</h2>                    
                    <button className="btn btn-danger">
                        <a href="/deleteuser">Delete Account</a>
                    </button>
                </div>
            )
    }
} // last bracket

export default Settings
