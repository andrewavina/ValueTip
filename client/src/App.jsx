import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import clientAuth from './clientAuth'

import NavBar from './NavBar'
import Footer from './Footer'
import Home from './views/Home'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import MyReport from './views/MyReport'
// import Companies from './views/Companies'
//Users
import Settings from './views/Settings'
import DeleteUser from './views/DeleteUser'
import DeleteUserConfirm from './views/DeleteUserConfirm'
//Stocks
import CreateStock from './views/CreateStock'
import ShowStock from './views/ShowStock'
import EditStock from './views/EditStock'




class App extends React.Component {
    state = { currentUser: clientAuth.getCurrentUser() }
    //order of below functions doesn't matter before render()...
    
    //initial fix for refresh of companies
        // componentWillMount() {
        //     this.setState({ currentUser: clientAuth.getCurrentUser() })
        // }

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

    deleteUser() { 
        clientAuth.deleteUser(this.state.currentUser)
        this.setState({ currentUser: null })
        console.log("worked")
    }

    editUser() { 
        clientAuth.editUser(this.state.currentUser)
        console.log("worked")
    }

    render() {
        const { currentUser } = this.state
        return (
            <div className='App'>
                
                <NavBar currentUser={this.state.currentUser} />

                <Switch>
                    
                    <Route path="/create-stock" render={(props) => {
                        return currentUser
                        ? <CreateStock {...props} currentUser={currentUser} />
                        : <Redirect to="/login" />
                    }} />

                    <Route path="/show-stock/:id" render={(props) => {
                        return currentUser
                        ? <ShowStock {...props} currentUser={currentUser} />
                        : <Redirect to="/login" />
                    }} />

                    <Route path="/edit-stock/:id" component={EditStock} />

                    <Route path="/deleteuserconfirm" render={(props) => {
                        return <DeleteUserConfirm {...props} onDeleteUserConfirm={this.deleteUser.bind(this)} />
                    }} />
                    
                    <Route path="/deleteuser" render={(props) => {
                        //console.log(currentUser) // test current user is coming through
                        return currentUser
                            ? <DeleteUser />
                            : <Redirect to="/login" />
                    }} />

                    <Route path="/settings" render={(props) => {
                        //console.log(currentUser) // test current user is coming through
                        return currentUser
                            ? <Settings {...props} onEditSuccess={this.editUser.bind(this)} currentUser={currentUser}/>
                            : <Redirect to="/login" />
                    }} />
                    
                    {/* <Route path="/companies" render={(props) => {
                        //console.log(currentUser) // test current user is coming through
                        return currentUser
                            ? <Companies />
                            : <Redirect to="/login" />
                    }} /> */}

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
                    
                    <Route path="/myreport" render={(props) => {
                        // console.log(currentUser) // test current user is coming through
                        return currentUser
                            ? <MyReport {...props} currentUser={currentUser}/>
                            : <Redirect to="/login" />
                    }} />

                    <Route path="/" component={Home} />

                </Switch>

                <Footer />

            </div>
        )
    }
}

export default App