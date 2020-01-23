import React from 'react'
import _ from 'lodash'
import NoteForm from './NoteForm'
import { connect } from 'react-redux'
import { startUpdateNote } from '../../actions/notes'

function NoteEdit(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startUpdateNote(formData, props))
    }
    return(
            <div align = "center">
                <h2>Edit Note</h2> 
                {
                    !_.isEmpty(props.note)  &&  <NoteForm {...props.note} handleSubmit = {handleSubmit}/>
                }
           </div>
        )
}
const mapStateToProps = ( state, props ) =>
{
    return({
        note : state.notes.find(note=> note._id === props.match.params.id)
    })
}
export default connect(mapStateToProps)(NoteEdit)