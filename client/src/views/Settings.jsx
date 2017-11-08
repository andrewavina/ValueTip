import React from 'react'

const Settings = (props) => {
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

export default Settings