import React from 'react'
import NoteForm from './NoteForm'
import { startAddNote } from '../../actions/notes'
import { connect } from 'react-redux'

function NoteNew(props)
{
    const handleSubmit = (formData) =>
    {
        props.dispatch(startAddNote(formData, props))
    }
    return(
            <div align = "center">
                <h2><u>Add a Note</u></h2>
                <NoteForm handleSubmit = {handleSubmit}/>
            </div>
    )
}
export default connect()(NoteNew)