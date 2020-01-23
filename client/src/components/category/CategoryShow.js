import React from 'react'
import _ from 'lodash'
import {Link} from 'react-router-dom'
import  { connect } from 'react-redux'


function CategoryShow(props)
{
   return(
            <div className = "container col-md-10">
                {
                    !_.isEmpty(props.category) &&
                    <div>
                        <h2>{props.category.name}</h2>
                        <ul className = "list-group">
                        {
                            !_.isEmpty(props.notes) &&
                            props.notes.map((note)=>
                            {
                                return(
                                    <li className = "list-group-item list-group-item-info" key = {note._id}><Link to = {`/notes/${note._id}`}>{note.title}</Link></li>
                                )
                            })
                        }
                        </ul>
                        <br/>
                        <Link to = "/categories"><button className="btn btn-dark">Back</button></Link>
                        </div>
                }
            </div>
        )
}

const mapStateToProps = ( state, props ) =>
{
    return({
        category : state.categories.find(category => category._id === props.match.params.id),
        notes : state.notes.filter(note => note.category._id === props.match.params.id )
    })
}
export default connect(mapStateToProps)(CategoryShow)