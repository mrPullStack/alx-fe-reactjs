// src/TodoList.js
import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Buy milk', completed: false },
        { id: 2, text: 'Walk the dog', completed: false },
        { id: 3, text: 'Do laundry', completed: false },
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
        <h1>Todo List</h1>
        <ul>
            {todos.map((todo) => (
            <li key={todo.id}>
                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
        <AddTodoForm addTodo={addTodo} />
        </div>
    );
    };

    const AddTodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">Add Todo</button>
        </form>
    );
};

export default TodoList;