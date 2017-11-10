import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div className='NavBar'>
            {/* <nav className="navbar fixed-top navbar-dark bg-dark bg-light"> */}
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">            
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
            </nav>
        </div>
    )
}

export default NavBar