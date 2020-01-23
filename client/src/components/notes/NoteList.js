import React from 'react'
import  { startRemoveNote } from '../../actions/notes'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'

function NoteList(props)
{
    const handleRemove = (id) =>
    {
        props.dispatch(startRemoveNote(id))
    }
    return (
            <div>
                <h2 align = "center">Your Notes Collection!</h2>  
              { 
                  props.notes.map((note)=>
                  {
                      return(
                          <div key = {note._id} class="jumbotron text-center">
                              <h1>{note.title}-<small>{note.category.name}</small></h1>
                              <p>{note.body}</p>

                              <Link to = {`/notes/${note._id}`}><button className = "btn btn-primary">Show</button></Link>
                              <button className = "btn btn-danger" onClick = {()=>
                            {
                                swal({
                                    title: "Are you sure?",
                                    text: "Once deleted, you will not be able to recover this file!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                  })
                                  .then((willDelete) => {
                                    if (willDelete) {
                                        handleRemove(note._id)
                                      swal("Poof! Your file has been deleted!", {
                                        icon: "success",
                                      });
                                    } else {
                                      swal("Your file is safe!");
                                    }
                                  });
                            }}>Remove</button>
                          </div>
                      )
                  })
              }
              <Link to = "/notes/new" className = "btn btn-primary">Add a note</Link>
            </div>
        )
}
const mapStateToProps = ( state ) =>
{
    return({
        notes : state.notes
    })
}
export default connect(mapStateToProps)(NoteList)