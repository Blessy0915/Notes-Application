import React from 'react'
import CategoryForm from './CategoryForm'
import { startAddCategory } from '../../actions/category'
import { connect } from 'react-redux'

function CategoryNew(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startAddCategory(formData, props))
    }
    return (
            <div align= "center"> 
                <h2><u>Add Category</u></h2> 
                < CategoryForm handleSubmit = {handleSubmit}/>
            </div>
        )
}
export default connect()(CategoryNew)