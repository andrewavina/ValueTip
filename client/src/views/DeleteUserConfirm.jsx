import React from 'react'
import { Redirect } from 'react-router-dom'

class DeleteUserConfirm extends React.Component {

    componentDidMount(props) {
            this.props.onDeleteUserConfirm()
        }

        render() {
            return <Redirect to="/login" />
        }
}

export default DeleteUserConfirm