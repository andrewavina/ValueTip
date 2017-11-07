import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import clientAuth from './clientAuth'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import Companies from './views/Companies'
import MyReport from './views/MyReport'
import Home from './views/Home'



class App extends React.Component {
    state = { currentUser: null }

    componentDidMount() {
        this.setState({ currentUser: clientAuth.getCurrentUser() })
    }

    onLoginSuccess(user) {
        this.setState({ currentUser: clientAuth.getCurrentUser() })
    }

    logOut() {
        clientAuth.logOut()
        this.setState({ currentUser: null })
    }

    render() {
        const { currentUser } = this.state
        return (
            <div className='App'>
                
                <NavBar currentUser={currentUser} />

                <Switch>

                <Route path="/companies" render={() => {
                        return currentUser
                            ? <Companies />
                            : <Redirect to="/login" />
                    }} />

                    <Route path="/login" render={(props) => {
                        return !currentUser
                            ? <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
                            : <Redirect to="/myreport" /> //fixed issue where if currentUser typed in /login in URL bar, they would be able to go to that page. Set it up like this to prevent them from accessing that page to avoid any potential "double login" issues.
                    }} />

                    <Route path="/logout" render={(props) => {
                        return <LogOut onLogOut={this.logOut.bind(this)} />
                    }} />

                    {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
                    <Route path="/signup" render={(props) => {
                        return !currentUser
                        ? <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
                        : <Redirect to="/myreport" /> //fixed issue where if currentUser typed in /signup in URL bar, they would be able to go to that page. Set it up like this to prevent them from accessing that page to avoid any potential "double sign up" issues.
                    }} />

                    
                    
                    <Route path="/myreport" render={() => {
                        return currentUser
                            ? <MyReport />
                            : <Redirect to="/login" />
                    }} />

                   

                    <Route path="/" component={Home} />

                </Switch>
            </div>
        )
    }
}

export default App