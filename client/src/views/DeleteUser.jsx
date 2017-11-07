import React from 'react'

const DeleteUser = (props) => {
    return (
        <div className='settings'>
            <h1>Delete Account</h1>
            <h2>Are you sure you want to DELETE your account?</h2>
            <button>Yes, Delete Account</button>
            <button>
                <a href="/myreport">Cancel</a>
            </button>
        </div>
    )
}

export default DeleteUser