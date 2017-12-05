import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        
        <div className='NavBar'>
            <nav className="navbar fixed-top navbar-dark bg-dark bg-light"> 
            
            {props.currentUser
                ? ( 
                    //Logged In User sees:
                    <span>
                        {/* test vvvvv */}
                        <Link to="/myreport">
                        <button type="button" class="btn btn-outline-secondary">My Report</button>                        
                        </Link>
                  
                        <Link to="/settings" className="navbar-item">
                        <button type="button" class="btn btn-outline-secondary">Settings</button>
                        </Link>                                                

                        <Link to="/logout">
                        <button type="button" class="btn btn-outline-secondary">Log Out</button>                        
                        </Link>
                    </span>
                )
                : (
                    //Else NOT logged in sees:                    
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


