import axios from 'axios'
import jwtDecode from 'jwt-decode'

const 
    clientAuth = axios.create()
    clientAuth.defaults.headers.common.token = getToken()

function getToken() {
    return localStorage.getItem('token')
}

function setToken(token) {
    localStorage.setItem('token', token)
    return token
}

function getCurrentUser() {
    const token = getToken()
    if(token) return jwtDecode(token)
    return null
}

function logIn(credentials) {
    return clientAuth({ method: 'post', url: '/api/users/authenticate', data: credentials })
        .then(res => {
            const token = res.data.token
            // console.log(getCurrentUser())
            if(token) {
                clientAuth.defaults.headers.common.token = setToken(token)
                return jwtDecode(token)
            } else {
                return false
            }
        })
}

// logIn and signUp functions could be combined into one since the only difference is the url sending a request to.
function signUp(userInfo) {
    return clientAuth({ method: 'post', url: '/api/users', data: userInfo })
        .then(res => {
            const token = res.data.token
            if(token) {
                clientAuth.defaults.headers.common.token = setToken(token)
                return jwtDecode(token)
            } else {
                return false
            }
        })
}

// function editUser(currentUser){
//     const token = getToken()
//     return clientAuth({ method: 'patch', url: `/api/users/${currentUser._id}`, data: token, currentUser })
//         .then(res => {
//             const token = res.data.token
//             if(token) {
//                 clientAuth.defaults.headers.common.token = setToken(token)
//                 return jwtDecode(token)
//                 return {message: "success"}
//             } else {
//                 return false
//             }
//         })
// }

function logOut() {
    localStorage.removeItem('token')
    delete clientAuth.defaults.headers.common.token
    return true
}

function deleteUser(currentUser) {
    const token = getToken() //works
    clientAuth({ method: 'delete', url: `/api/users/${currentUser._id}`, data: token, currentUser })
        .then(res => {
            //send request to delete route...that should delete user
            console.log("Deleted User Successfully")
            //kill token (also doing in View view redirect)
            localStorage.removeItem('token')
            delete clientAuth.defaults.headers.common.token
            return true
        })
}

export default {
    getCurrentUser,
    logIn,
    signUp,
    logOut,
    deleteUser
    // editUser
}