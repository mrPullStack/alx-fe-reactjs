import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

// test('renders the todo list component', () => {
//     render(<TodoList />);
//     const element = screen.getByText(/todo list/i);
//     expect(element).toBeInTheDocument();
// });

test('renders the TodoList component', () => {
    render(<TodoList />);
    const headingElement = screen.getByText(/todo list/i);
    expect(headingElement).toBeInTheDocument();
});

test('renders initial todo items', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
    });

test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText('Add new todo'), {
        target: { value: 'Learn Testing' },
    });
    fireEvent.click(screen.getByText('Add Todo'));
    expect(screen.getByText('Learn Testing')).toBeInTheDocument();
    });

test('toggles a todo completed state', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
    });

test('deletes a todo', () => {
    render(<TodoList />);
    const todoItem = screen.getByText('Learn React');
    fireEvent.click(screen.getByText('Delete', { selector: 'button' }));
    expect(todoItem).not.toBeInTheDocument();
});
