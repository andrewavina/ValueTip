import React from 'react'

const Footer = (props) => {
    return (
        <div className='Footer'>
            <footer id="gtco-footer" role="contentinfo">
                <div className="gtco-container">
                    

                    <div className="row copyright">
                        <div className="col-md-12">
                            <p className="pull-left">
                                <small className="block">This is a sample app developed by Andrew Avina. Find me on:</small> 
                            </p>
                            <div className="pull-right">
                                <ul className="gtco-social-icons pull-right">
                                    <li><a href="https://github.com/andrewavina" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/andrewavina/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin"></i></a></li>
                                    <li><a href="https://www.andrewavina.com" target="_blank" rel="noopener noreferrer"><i className="icon-briefcase"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </div>
    )
}

export default Footer