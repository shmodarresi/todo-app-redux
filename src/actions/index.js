import {ADD_TODO, TOOGLE_TODO, DELETE_TODO, DELETE_ALL_TODO} from './actionTypes';
import shortid from 'shortid';

export const addTodo = (text) => {
    return {
        type: ADD_TODO,
        text,
        id : shortid.generate()
    };
}

export const toggleTodo = (id) => {
    return {
        type: TOOGLE_TODO,
        id
    };
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    };
}

export const deleteAllTodo = () => {
    return {
        type: DELETE_ALL_TODO
    };
}