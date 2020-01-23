import React from 'react'
import { startLoginUser } from '../../actions/user'
import { connect } from 'react-redux'

class LoginForm extends React.Component
{
    constructor()
    {
        super()
        this.state = {
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
            email : this.state.email,
            password : this.state.password
        }
        this.props.dispatch(startLoginUser(formData, this.props))
        
    }
    render()
    {
        return(
            <div className = "row">
                <div className = "col-md-6 offset-md-3">
                <h1 className = "text-center">Login</h1>
                <form onSubmit = {this.handleSubmit}>
                    <div className = "form-group">
                    <label htmlFor = "email"></label>
                        <input type = "text"
                               value = {this.state.email}
                               onChange = {this.handleChange}
                               id = "email"
                               name = "email"
                               placeholder = "abc123@gmail.com"
                               className = "form-control"/>
                    </div>
                    <div className = "form-group">
                    <label htmlFor = "password"></label>
                        <input type = "password"
                               value = {this.state.password}
                               onChange = {this.handleChange}
                               id = "password"
                               name = "password"
                               placeholder = "--password--"
                               className = "form-control"/>
                    </div>
                    <input type = "submit"
                           value = "Login"
                           className = "btn btn-primary btn-lg btn-block"/>
                </form>
            </div>
            </div>
        )
    }
}
export default connect()(LoginForm)