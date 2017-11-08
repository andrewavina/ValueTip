import React from 'react'
import { Link } from 'react-router-dom'

const DeleteUser = () => {
    return (
        <div className='settings'>
            <h1>Delete Account</h1>
            <h2>Are you sure you want to DELETE your account?</h2>
            <Link to="/deleteuserconfirm">Yes, Delete Account</Link>
            <button>
                <a href="/myreport">Cancel</a>
            </button>
        </div>
    )
}

export default DeleteUser