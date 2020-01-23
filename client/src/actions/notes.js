import axios from '../config/axios'
import swal from 'sweetalert'

export const setNotes = ( notes ) =>
{
    return({
        type : 'SET_NOTES',
        payload : notes
    })
}
export const startSetNotes = () =>
{
    return (dispatch) =>
    {
        axios.get('/notes', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const notes = response.data
            dispatch(setNotes(notes))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}


export const addNote = (note) =>
{
    return({
        type : 'ADD_NOTE',
        payload : note
    })
}
export const startAddNote = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/notes', formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                const note = response.data
                dispatch(addNote(note))
                props.history.push(`/notes/${note._id}`)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const removeNote = ( id ) =>
{
    return({
        type : 'REMOVE_NOTE',
        payload : id
    })
}
export const startRemoveNote = ( id ) =>
{
    return ( dispatch ) =>
    {
        axios.delete(`/notes/${id}`, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const note = response.data
            dispatch(removeNote(note._id))
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}

export const updateNote = ( note ) =>
{
    return({
        type : 'UPDATE_NOTE',
        payload : note
    })
}
export const startUpdateNote = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.put(`/notes/${props.match.params.id}`, formData, {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            { 
                const note = response.data
                dispatch(updateNote(note))
                props.history.push(`/notes/${note._id}`)
            }
        })
    }
}