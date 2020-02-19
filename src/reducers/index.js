import {ADD_TODO, TOOGLE_TODO, DELETE_TODO, DELETE_ALL_TODO} from '../actions/actionTypes';



const todos = (state = [] , action) =>{
    switch(action.type){
        case ADD_TODO:{
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed : false
                }
            ]
        }
        case TOOGLE_TODO:{
            return state.map( 
                todo => todo.id === action.id ? { ...todo , completed : !todo.completed } : todo
                )
        }
        case DELETE_TODO:{
            return state.filter(todo => todo.id !== action.id)
        }
        case DELETE_ALL_TODO:{
            return state = []
        }
        default:
            return state;

    }
}

export default todos;