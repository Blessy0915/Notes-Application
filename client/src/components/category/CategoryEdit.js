import React from 'react'
import { startUpdateCategory } from '../../actions/category'
import CategoryForm from './CategoryForm'
import { connect } from 'react-redux'
import _ from 'lodash'

function CategoryEdit(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startUpdateCategory(formData, props))
    }
    return(
            <div>
                <h2 className = "text-center"><u>Edit Category</u></h2>
                {
                    !_.isEmpty(props.category) && <CategoryForm {...props.category} handleSubmit = {handleSubmit}/>
                }
                
            </div>
        )
}
const mapStateToProps = ( state, props ) =>
{
    return({
        category : state.categories.find(category => category._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(CategoryEdit)