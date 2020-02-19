import React , {useState} from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addNewTodo = (todo) => {
        setTodos([...todos, todo]);
    }

    const toggleTodoClick = id => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }else{
                return todo
            }

        }));
    }

    const deleteTodoClick = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <AddTodo onSubmit={addNewTodo} />
            <ul className="todo-list">
                {
                    todos.map(i => <Todo 
                                    todo={i} 
                                    key={i.id} 
                                    toggleTodo={toggleTodoClick}
                                    deleteTodo={deleteTodoClick} />)
                }
            </ul>

            {todos.length > 1 && <div className="btn-row" onClick={() => setTodos([])}>clear all <span className="icon-trash"></span></div>}
        </div>
    );
};

export default TodoList;