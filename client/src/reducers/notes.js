const notesInitialState = []

const notesReducer = ( state = notesInitialState, action) =>
{
    switch(action.type)
    {
        case 'SET_NOTES' : {
            return [...action.payload]
        }
        case 'ADD_NOTE' : {
            return [...state, action.payload]
        }
        case 'UPDATE_NOTE' : {
            return state.map(note =>
                {
                    if(note._id === action.payload._id)
                    {
                        return {...action.payload}
                    }
                    else
                    {
                        return {...note}
                    }
                })
        }
        case 'REMOVE_NOTE' : {
            return state.filter(note => note._id !== action.payload)
        }
        default : {
            return [...state]
        }
    }
}

export default notesReducer