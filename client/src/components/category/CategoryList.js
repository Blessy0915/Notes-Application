import React from 'react'
import {Link} from 'react-router-dom' 
import { connect } from 'react-redux'
import { startRemoveCategory } from '../../actions/category'
import swal from 'sweetalert'

function CategoryList(props)
{
    const handleRemove = (id) =>
    {
        props.dispatch(startRemoveCategory(id))
    }
    return(
            <div className ="container col-md-10">
                <h2 className = "text-center">Categories </h2><br/>
                <table className = "table table-hover">
                    <thead className = "thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Action</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.categories.map((category)=>
                            {
                                return(
                                    <tr key = {category._id}>
                                        <td>{category.name}</td>
                                        <td><Link to = {`/categories/${category._id}`}  className="btn btn-info">Show</Link></td>
                                        <th><Link to = {`/categories/edit/${category._id}`}  className="btn btn-info">Edit</Link></th>
                                        <td><button className = "btn btn-danger" onClick = {()=>
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
                                                    handleRemove(category._id)
                                                  swal("Poof! Your file has been deleted!", {
                                                    icon: "success",
                                                  });
                                                } else {
                                                  swal("Your file is safe!");
                                                }
                                              });
                                        }}>Remove</button></td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </table>
                <Link to = "/categories/new" className = "btn btn-dark">Add a category</Link>
            </div>

        )
}

const mapStateToProps = ( state ) =>
{
    return({
        categories : state.categories
    })
}
export default connect(mapStateToProps)(CategoryList)