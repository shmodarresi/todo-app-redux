import React from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

import {connect} from 'react-redux';
import { deleteTodo , deleteAllTodo, toggleTodo} from '../actions';

const TodoList = ({todos, deleteTodoClick, toggleTodoClick, deleteAllTodoClick}) => {
    return (
        <div>
            <AddTodo />
            <ul className="todo-list">
                {
                    todos.map(i => <Todo 
                                    todo={i} 
                                    key={i.id} 
                                    toggleTodo={toggleTodoClick}
                                    deleteTodo={deleteTodoClick} />)
                }
            </ul>

            {todos.length > 1 && <div className="btn-row" onClick={() => deleteAllTodoClick()}>clear all <span className="icon-trash"></span></div>}
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {
        todos: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteTodoClick: (id) => {
            dispatch(deleteTodo(id));
        },

        toggleTodoClick: (id) => {
            dispatch(toggleTodo(id));
        },

        deleteAllTodoClick: () => {
            dispatch(deleteAllTodo());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);