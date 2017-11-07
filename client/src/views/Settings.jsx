import React from 'react'
import clientAuth from '../clientAuth'

const Settings = (props) => {
    return (
        <div className='settings'>
            <form>
                <input type="password" placeholder="Password" name="password" />                   
                <button>Change Password</button>
            </form>
            <br/>
            <button>Delete Account</button>
        </div>
    )
}

export default Settings