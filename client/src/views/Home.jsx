import React from 'react'

const Home = (props) => {
    return (
        <div className='Home'>  
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">ValueTip</h1>
                    <p className="lead">Discovery aid for the value investor.</p>
                    <hr className="my-4"/>
                    <a className="btn btn-primary btn-lg" href="/login" role="button">Log In</a>
                    <a className="btn btn-success btn-lg" href="signup" role="button">Sign Up</a>
                </div>
            </div>
        </div>        
    )
}

export default Home