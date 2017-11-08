import React from 'react'
//import clientAuth from '../clientAuth'

class Settings extends React.Component {
    state = {
        fields: { password: ''}
    }

    

    render() {
        const { password } = this.state.fields 
            return (
                <div className='settings'>
                    <form>
                        <input type="password" placeholder="Password" name="password" />                   
                        <button>Change Password</button>
                    </form>
                    <br/>
                    <button>
                        <a href="/deleteuser">Delete Account</a>
                    </button>
                </div>
            )
    }
}

export default Settings