# **ValueTip**

## Get tips on stock prices that might be a good value.

<a href="https://murmuring-crag-60865.herokuapp.com/">See application here</a>

![Imgur](https://i.imgur.com/niQWplc.png)
![Imgur](https://i.imgur.com/09zui5L.png)
![Imgur](https://i.imgur.com/6KEKoi4.png)

## Tech Used
* React (created via create-react-app)
* Node.js
* mongoDB
* JavaScript
* Mongoose
* Express.js
* axios
* JWT for authentication/authorization
* Bootstrap library
* HTML
* CSS
* Heroku
* NPM Packages:
    - Back-end:
        - bcrypt-nodejs
        - body-parser
        - dotenv
        - express
        - jsonwebtoken
        - mongoose
        - morgan
    - Front-end:
        - axios
        - jwt-decode
        - react
        - react-dom
        - react-router-dom
        - react-scripts
        - react-select

## Approach
- Started with wireframing and ERB modeling first. 
- Mapped out how the app should function based off of user stories before starting to code.   
- Users of this app would generally be people who invest in the stock market who use a "value investing" strategy (e.g. Ben Graham, Warren Buffett, etc.). They would want to use this app in order to save them time, money, and effort of having to manually do initial discovery of potential stocks to invest in. 
- The user stories to begin with were:
    * As a user, I want to be able to bookmark/save favorite stocks, so that I can track their performance
    * As a user, I want to be able to get alerts of stocks that fit my criteria based off custom calculations to save me time and money from doing it my own online
    * As a user, I want to be able to search through all stocks on the main US stock exchanges (i.e. NYSE and Nasdaq), because I’m a US investor who only invests in the main big markets
    * As a user, be able to get relevant data and news on alerted/bookmarked companies, because I want to research them more thoroughly before investing in them
- Split up features/functionality based off difficulty to implement and user story value (e.g. static component info then API data then programmatic alerting and calculations)

## Planning Tools
* <a href="https://trello.com/b/SJFM1xDb/project-4-stock-app">Link to Trello.</a>
* <a href="https://docs.google.com/presentation/d/1w4Cp9Vr9NT2aEf9mRD5JfDm3XEbsYh9-oTDFGlNAlBg/edit?usp=sharing">Wireframes</a>

* <a href="https://docs.google.com/presentation/d/1hYqtMqSBdV4slT__i418qjovuvlrFkzdcvPx1NkNj2g/edit?usp=sharing">Models</a>

## Installation instructions to run your app locally on your machine
* Fork from GitHub 
* From your terminal, go into the working folder you want to save application to. 
* Run git clone
* Run `npm install`
* Ensure all required packages in server.js file are installed. 
* In terminal, open up a separate tab and run `mongod`. Then, open another tab and run `nodemon`.
* Open in browser local host to ensure site works.

## Major Hurdles
* General data transfer from front to back end. 
* Getting data (both static, API, and 3rd party API) to render the way it needed to. 
* This took up most of time during project week and kept me from adding more functionality. 

## Unsolved Problems/Open Items 
* Edit stock.
* Integrating 3rd party API to enable users to search for stocks they want to bookmark.
* Calculations based off of common value investing principles e.g.:
    1. Financial Condition: (a) Current assets at least 1 ½ times current liabilities, and (b) debt not more than 110% of net current assets (for industrial companies).
    2. Earnings stability: No deficit in the last five years covered in the stock guide.
    3. Dividend record: some current dividend.
    4. Earnings growth: Last year’s earnings more than those of each over last 3 years.
    5. Price: Less than 120% net tangible assets.