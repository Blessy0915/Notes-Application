import axios from '../config/axios'
import { startSetCategories } from './category'
import { startSetNotes } from './notes'
import swal from 'sweetalert'
export const setUser = (user = {}) =>
{
    return({
        type : 'SET_USER',
        payload : user
    })
}

export const startRegisterUser = ( formData, props ) =>
{
    return (dispatch) =>
    {
        axios.post('/users/register', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('errors'))
            {
                swal(response.data.message)
            }
            else
            {
                swal({
                    title: "Successfully Registered",
                    
                    icon: "success",
                    button: "Aww yiss!",
                  });
                dispatch(setUser())
                props.history.push('/users/login')
            }
        })
        .catch((err)=>
        {
            alert(err)
        })
    }
}

export const startLoginUser = (formData, props) =>
{
    return (dispatch) =>
    {
        axios.post('/users/login', formData)
        .then((response)=>
        {
            if(response.data.hasOwnProperty('token'))
            {
                const token = response.data.token
                localStorage.setItem('authToken', token)
                swal({
                    title: "Logged in successfully",
                    
                    icon: "success",
                    button: "Aww yiss!",
                  });
                Promise.all([axios.get('/users/accounts', {
                    headers : {
                       'x-auth' : token 
                    }
                }), axios.get('/categories', {
                    headers : {
                        'x-auth' : token
                    }
                }), axios.get('/notes', {
                    headers : {
                        'x-auth' : token
                    }
                })])
                .then((values)=>
                {
                    const [usersResponse, categoriesResponse, notesResponse] = values
                    dispatch(setUser(usersResponse.data))
                    dispatch(startSetCategories(categoriesResponse.data))
                    dispatch(startSetNotes(notesResponse.data))
                    props.history.push('/')
                })
            }
            else
            {
                swal(response.data)
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export const startGetUser = () =>
{
    return (dispatch) =>
    {
        axios.get('/users/accounts', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            const user = response.data
            dispatch(setUser(user))
        })
    }
}

export const startLogoutUser = () =>
{
    return (dispatch) =>
    {
        axios.delete('/users/logout', {
            headers : {
                'x-auth' : localStorage.getItem('authToken')
            }
        })
        .then((response)=>
        {
            if(response.data.hasOwnProperty('notice'))
            {
                swal({
                    title: "Successfully Logged out",
                    
                    icon: "success",
                    button: "Aww yiss!",
                  });
                    localStorage.removeItem('authToken')
                    dispatch(setUser({}))
                    window.location.href = "/users/login"
            }
            else
            {
                swal(response.data)
            }
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}