import React from 'react'

export default class CategoryForm extends React.Component
{
    constructor(props)
    {
        super()
        this.state = {
            name : props.name? props.name : ''
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
            name : this.state.name
        }
        this.props.handleSubmit(formData)
    }
    render()
    {
        return(
            <div className = "container offset col-md-5">
                <form onSubmit = {this.handleSubmit} className = "form-group">
                    <label htmlFor = "name">Name</label> 
                        <input type = "text"
                               value = {this.state.name}
                               name = "name"
                               id = "name"
                               className = "form-control"
                               onChange = {this.handleChange}/><br/>
                    <input type = "submit" className = "btn btn-primary"/>
                </form>
            </div>
        )
    }
}