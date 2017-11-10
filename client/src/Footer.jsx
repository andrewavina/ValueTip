import React from 'react'

const Footer = (props) => {
    return (
        <div className='Footer'>
            {/* <div className="card-footer text-muted">
                    2 days ago
            </div> */}
            <nav className="navbar fixed-bottom navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    © andrewavina, 2017
                </a>
                <a className="navbar-brand" href="https://github.com/andrewavina/stock-app" target="_blank">Github</a>
            </nav>
        </div>
    )
}

export default Footer