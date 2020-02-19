import React , {useState} from 'react';

import {connect} from 'react-redux';
import {addTodo} from '../actions';

const AddTodo = props => {
    const [term , setTerm]= useState('');


    const addTodoSubmit = e =>{
        e.preventDefault();

        if(term.length === 0){
            return null
        }

        props.dispatch(addTodo(term));

        setTerm('');
    }

    return (
        <div>
            <form onSubmit ={addTodoSubmit} className="add-todo-form">
                <span className="icon-pen"></span>
                <input type="text" value={term} onChange={e => setTerm(e.target.value)} placeholder="What needs to be accomplished?" />
            </form>
        </div>
    );
};

export default connect()(AddTodo);