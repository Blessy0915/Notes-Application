import React from 'react'
import { startRegisterUser } from '../../actions/user'
import { connect } from 'react-redux'

class RegisterForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            username : '',
            email : '',
            password : ''
        }
    }
    handleChange = (e) =>
    {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit = (e) =>
    {
        e.preventDefault()
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startRegisterUser(formData, this.props))
    }
    render()
    {
        return (
            <div className = "row">
            <div className = "col-md-6 offset-md-3">
                <h2 className = "text-center">Register With Us!!</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = "username"></label>
                    <div className = "form-group">
                        <input type = "text"
                               value = {this.state.username}
                               onChange = {this.handleChange}
                               id = "username"
                               name = "username"
                               placeholder = "--username--"
                               className = "form-control"/>
                    </div>
                    <label htmlFor = "email"></label>
                    <div className = "form-group">
                        <input type = "text"
                               value = {this.state.email}
                               onChange = {this.handleChange}
                               id = "email"
                               name = "email"
                               placeholder = "abc123@gmail.com"
                               className = "form-control"/>
                    </div>
                    <label htmlFor = "password"></label>
                    <div className = "form-group">
                        <input type = "password"
                               value = {this.state.password}
                               onChange = {this.handleChange}
                               id = "password"
                               name = "password"
                               placeholder = "--password--"
                               className = "form-control"/>
                    </div>
                    <input type = "submit"
                           value = "Register"
                           className = "btn btn-primary btn-lg btn-block"/>
                </form>
                </div>
            </div>
        )
    }
}
export default connect()(RegisterForm)