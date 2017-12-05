import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        
        <div className='NavBar'>
            <nav className="navbar fixed-top navbar-dark bg-dark bg-light"> 
            
            {props.currentUser
                ? ( 
                    //Logged In User sees:
                    <span>
                        <Link to="/">
                        <div className="navbar-brand">
                            <img src="VT.png" width="30" height="30" alt=""/>
                        </div>
                        </Link>

                        <Link to="/myreport">
                        <button type="button" className="btn btn-outline-secondary">My Report</button>                        
                        </Link>
                  
                        <Link to="/settings" className="navbar-item">
                        <button type="button" className="btn btn-outline-secondary">Settings</button>
                        </Link>                                                

                        <Link to="/logout">
                        <button type="button" className="btn btn-outline-secondary">Log Out</button>                        
                        </Link>
                    </span>
                )
                : (
                    //Else NOT logged in sees:                    
                    <span>
                        <Link to="/">
                        <div className="navbar-brand">
                            <img src="VT.png" width="30" height="30" alt=""/>
                        </div>
                        </Link>

                        <Link to="/login">
                        <button type="button" className="btn btn-outline-secondary">Login</button>                        
                        </Link>

                        <Link to="/signup">
                        <button type="button" className="btn btn-outline-secondary">Sign Up</button>                        
                        </Link>
                    </span>
                )
            }
            </nav>
        </div>
    )
}

export default NavBar


