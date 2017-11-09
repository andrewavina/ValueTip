import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className='NavBar'>
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
                        <Link to="/">Home</Link>                        
                        <Link to="/login">Log In</Link>
                        <Link to="/signup">Sign Up</Link>
                    </span>
                )
            }
        </div>
    )
}

export default NavBar