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
                            <button type="button" className="btn btn-outline-secondary">
                            <img src="VT.png" width="30" height="30" alt=""/>
                            </button>
                        </div>
                        </Link>

                        <Link to="/myreport">
                        <button type="button" className="btn btn-outline-secondary">My Report <i className="fa fa-list-alt" aria-hidden="true"></i></button>                        
                        </Link>
                  
                        <Link to="/settings" className="navbar-item">
                        <button type="button" className="btn btn-outline-secondary">Settings <i className="fa fa-address-card-o" aria-hidden="true"></i></button>
                        </Link>                                                
                        
                        <Link to="/about" className="navbar-item">
                        <button type="button" className="btn btn-outline-secondary">About <i className="fa fa-info-circle" aria-hidden="true"></i></button>
                        </Link> 

                        <Link to="/logout">
                        <button type="button" id="logout" className="btn btn-outline-secondary">Log Out <i className="fa fa-sign-out" aria-hidden="true"></i></button>                        
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

                        <Link to="/about" className="navbar-item">
                        <button type="button" className="btn btn-outline-secondary">About <i className="fa fa-info-circle" aria-hidden="true"></i></button>
                        </Link> 

                        <Link to="/login">
                        <button type="button" className="btn btn-outline-secondary">Login <i className="fa fa-sign-in" aria-hidden="true"></i></button>                        
                        </Link>

                        <Link to="/signup">
                        <button type="button" className="btn btn-outline-secondary">Sign Up <i className="fa fa-user-plus" aria-hidden="true"></i></button>                        
                        </Link>
                    </span>
                )
            }
            </nav>
        </div>
    )
}

export default NavBar


