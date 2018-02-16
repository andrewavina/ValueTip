import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        
        <div className='NavBar'>
            <div className="gtco-nav" role="navigation"> 
            
            {props.currentUser
                ? ( 
                    //Logged In User sees:
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <div id="gtco-logo">
                                    <Link to="/"><div>ValueTip<em>.</em></div></Link>
                                </div>
                            </div>
                            <div className="col-xs-8 text-right menu-1">
                                <ul>
                                    <Link to="/myreport"><li>My Report</li></Link>
                                    <Link to="/settings"><li>Settings</li></Link>
                                    <Link to="/logout"><li>Log Out</li></Link>
                                </ul>	
                            </div>
                        </div>
                    </div>
                )
                : (
                    //Else NOT logged in sees:                    
                    <div className="gtco-container">
                        <div className="row">
                            <div className="col-sm-4 col-xs-12">
                                <div id="gtco-logo">
                                    <Link to="/"><div>ValueTip<em>.</em></div></Link>
                                </div>
                            </div>
                            <div className="col-xs-8 text-right menu-1">
                                <ul>
                                    <Link to="/login"><li>Login</li></Link>
                                    <Link to="/signup"><li>Sign Up</li></Link>
                                </ul>	
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default NavBar


