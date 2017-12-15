import React from 'react';

const About = (props) => {
    return (
        <div> 
            <div className="jumbotron jumbotron-fluid" id="container3">
                <div className="container heading">
                    <p className="lead">What is Value Investing?</p>
                    <p>Value investing is an investment strategy where stocks are selected that trade for less than their intrinsic values. Value investors actively seek stocks they believe the market has undervalued.</p>
                    <p>One of the best resources to learn more about value investing is a book written by famous value investing teacher, Ben Graham, called</p> <a href="https://www.amazon.com/Intelligent-Investor-Definitive-Investing-Essentials/dp/0060555661/ref=sr_1_2?ie=UTF8&qid=1513298885&sr=8-2&keywords=the+intelligent+investor+by+benjamin+graham" target="_blank">The Intelligent Investor</a> 
                    <img src="https://i.imgur.com/GJkUomq.jpg" alt="bookCover"/>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid" id="container4">
                <div className="container heading">
                    <p className="lead">5 factors and their formulas</p>
                    <p>There are many factors to consider when deciding to invest in a stock, regardless of strategy. These are just 5 factors that are important in the value investing strategy ValueTip aims to help figure out quickly for investors. They are:</p>
                    <ol>
                        <li>Financial Condition: (a) Current assest are at least 1 1/2 times current liabilities, and (b) debt not more than 110% of net current assets (for industrial companies).</li>
                        <li>Earnings Stability: No deficit in the last fivve years covered in the stock guide.</li>
                        <li>Dividend record: Some current divided.</li>
                        <li>Earnings growth: Last year's earnings more than those of [past 3 years] (ValueTip uses 3 years due to Graham's book saying 1966).</li>
                        <li>Price: that the price be less than 120% net tangible assets.</li>
                    </ol>
                    <p>These can be easily calculated manually, but when researching multiple stocks (there are thousands alone in the US markets), it helps to automate a manual process that may not serve any benefit calculating on your own.</p>
                </div>
            </div>

            <div className="jumbotron jumbotron-fluid" id="container3">
                <div className="container heading">
                    <p className="lead">To learn more about the code behind the app or my own portfolio, here are links:</p>
                    <a className="navbar-brand" href="https://github.com/andrewavina/ValueTip" target="_blank"><i class="fa fa-github" aria-hidden="true"></i></a>
                    <a href="https://www.andrewavina.com" target="_blank">Andrew Avina Portfolio</a>
                </div>
            </div>

        </div>
    )
}

export default About 