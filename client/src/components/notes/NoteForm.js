import React from 'react'
import { connect } from 'react-redux'

class NoteForm extends React.Component
{
    constructor(props)
    {
        super()
        this.state = {
            title : props.title? props.title : '',
            body : props.body ? props.body : '',
            category : props.category ? props.category : ''
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
            title : this.state.title,
            body : this.state.body,
            category : this.state.category

        }
        this.props.handleSubmit(formData)
    }
    render()
    {
        return(
            <div className = "row">
                <div className = "col-md-6 offset-md-3">
                <form onSubmit = {this.handleSubmit}>
                <div className = "form-group">
                    <label htmlFor = "title">Title</label>
                        <input type = "text"
                               value = {this.state.title}
                               name = "title"
                               id = "title"
                               className = "form-control"
                               onChange = {this.handleChange}/>
                    </div>
                    <div className = "form-group">
                    <label htmlFor = "body" >Body</label>
                        <textarea value = {this.state.body}
                                  name = "body"
                                  className = "form-control"
                                  id = "body"
                                  onChange = {this.handleChange}>
                        </textarea>
                        </div>
                    <div className = "form-group">
                    <label htmlFor = "category">category</label>
                        <select onChange = {this.handleChange} name = "category" id = "category" className = "form-control">
                            <option>select</option>
                            {
                                this.props.categories.map((category)=>
                                {
                                    return (
                                        <option key = {category._id} value = {category._id}>{category.name}</option>
                                    )
                                })
                            }
                        </select>
                        </div>
                    <input type = "submit"
                           value = "Submit"
                           className = "btn btn-primary btn-lg btn-block"/>
                </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = ( state ) =>
{
    return({
        categories : state.categories
    })
}
export default connect(mapStateToProps)(NoteForm)