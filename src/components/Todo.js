import React from 'react';

const Todo = ({todo , toggleTodo , deleteTodo}) => {
    return (
        <li className={todo.completed ? 'isDone' : null}  >
            <div onClick={() => toggleTodo(todo.id)}>
                <span className="icon-chkbox" ></span>
                {todo.text}
            </div>
            <span className="icon-trash" onClick={() => deleteTodo(todo.id)}></span>
        </li>
    );
};

export default Todo;