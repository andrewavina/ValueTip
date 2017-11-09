import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            <Link to="/">Home</Link>
            {props.currentUser
                ? ( 
                    <span>
                        <Link to="/myreport">My Report</Link>
                        {/* <Link to="/companies">Companies</Link> */}
                        <Link to="/settings">Settings</Link>                                                
                        <Link to="/logout">Log Out</Link>
                    </span>
                )
                : (
                    <span>
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </span>
                )
            }
        </div>
    )
}

export default NavBar