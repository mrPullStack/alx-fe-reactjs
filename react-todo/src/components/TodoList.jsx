import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Learn Jest', completed: false },
    ]);
    const [newTodo, setNewTodo] = useState('');

    const TodoList = () => {
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                <li>Task 1</li>
                <li>Task 2</li>
                </ul>
            </div>
            );
        };

    const addTodo = () => {
        if (newTodo.trim()) {
        setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
        setNewTodo('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(
        todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
        <h1>Todo List</h1>
        <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {todos.map(todo => (
            <li
                key={todo.id}
                onClick={() => toggleTodo(todo.id)}
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
                {todo.text}
                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default TodoList;
