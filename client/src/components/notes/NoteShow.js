import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

function NoteShow(props)
{
    return(
            <div >
        
           
            {
                !_.isEmpty(props.note) &&
                <div>
                <div class="card bg-light mb-3 container col-md-6">
                     <div class="card-body"></div>
                    <h2 class="card-title text-center">{props.note.title}</h2>
                    <p class="card-text text-center">category : {props.note.category.name}<br/>{props.note.body}</p></div>
                    <div className = "text-center">
                    <Link to = {`/notes/edit/${props.note._id}`} className = "text-center"><button className = "btn btn-primary">Edit </button></Link>
                    <Link to = "/notes"><button className = "btn btn-secondary"> Back</button></Link>
                </div></div>
            }
        </div>
        )
}
const mapStateToProps = ( state, props ) =>
{
    return({
        note : state.notes.find(note => note._id === props.match.params.id)
    })
}

export default connect(mapStateToProps)(NoteShow)