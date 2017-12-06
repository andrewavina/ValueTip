import React from 'react'
import { Link } from 'react-router-dom'

const DeleteUser = () => {
    return (
        <div className='settings'>
            <h1>Delete Account</h1>
            <h2>Are you sure you want to DELETE your account?</h2>
            <Link to="/deleteuserconfirm">
                <button className="btn btn-danger"><i class="fa fa-ban" aria-hidden="true"></i> Yes, Delete Account <i class="fa fa-ban" aria-hidden="true"></i> </button>
            </Link>
            
            <Link to="/myreport">
                <button className="btn btn-primary">Cancel</button>
            </Link>
        </div>
    )
}

export default DeleteUser