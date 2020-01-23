import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notes'
import categoryReducer from '../reducers/category'
import userReducer from '../reducers/user'

const configureStore = () =>
{
    const store = createStore(combineReducers({
        notes : notesReducer,
        categories : categoryReducer,
        user : userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore