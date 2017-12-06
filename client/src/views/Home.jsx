import React from 'react'

const Home = (props) => {
    return (
        <div className='Home'>  
            
            <div className="jumbotron jumbotron-fluid container1">
                <div className="container heading">
                    <h1 className="display-3" id="headline">ValueTip</h1>
                    <p className="lead" id="subhead">Discovery aid for the value investor</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid" id="container2">
                <div className="container heading">
                    <i className="fa fa-bookmark-o" aria-hidden="true"></i>
                    <h1 className="display-3">Bookmark</h1>
                    <p className="lead">Keep track of stocks to save time searching</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid" id="container3">
                <div className="container heading">
                    <i className="fa fa-calculator" aria-hidden="true"></i>
                    <h1 className="display-3">Auto-Calculate</h1>
                    <p className="lead">ValueTip calculates key value investment factors for you</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid" id="container4">
                <div className="container heading">
                    <i className="fa fa-tachometer" aria-hidden="true"></i>
                    <h1 className="display-3">Scoring</h1>
                    <p className="lead">Help summarize all of the outcomes from calculations and analysis with an easy to track score</p>
                </div>
            </div>

        </div> //last div
    )
}

export default Home