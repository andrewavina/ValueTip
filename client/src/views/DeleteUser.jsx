import React from 'react'
import { Link } from 'react-router-dom'

const DeleteUser = () => {
    return (
        <div className='settings'>        
            <header id="gtco-header" className="gtco-cover gtco-cover-sm" role="banner">
                <div className="overlay"></div>
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0 text-center">
                            <div className="row row-mt-15em">
                                <div className="col-md-12 mt-text" data-animate-effect="fadeInUp">
                                    <h1>Are you sure you want to delete your account?</h1>	
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="gtco-section">
                <div className="gtco-container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center gtco-heading">
                            <form action="#">
                                <div className="row form-group">
                                    <div className="col-md-12">
                                    <Link to="/deleteuserconfirm">
                                        <button className="btn btn-danger">Yes, please delete</button>																		
                                    </Link>
                                    </div>
                                </div>
                            </form>					
                            <div className="row form-group">
                            <Link to="/myreport">
                                <button className="btn btn-primary">NO, wait! Take me back!</button>										
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteUser