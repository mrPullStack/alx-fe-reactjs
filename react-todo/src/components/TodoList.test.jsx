import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList component', () => {
    it('renders the todo list', () => {
        const { getByText } = render(<TodoList />);
        expect(getByText('Todo List')).toBeInTheDocument();
        expect(getByText('Buy milk')).toBeInTheDocument();
        expect(getByText('Walk the dog')).toBeInTheDocument();
        expect(getByText('Do laundry')).toBeInTheDocument();
    });

    it('adds a new todo', () => {
        const { getByText, getByPlaceholderText } = render(<TodoList />);
        const input = getByPlaceholderText('Add Todo');
        const addButton = getByText('Add Todo');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(getByText('New Todo')).toBeInTheDocument();
    });

    it('toggles a todo', () => {
        const { getByText } = render(<TodoList />);
        const toggleButton = getByText('Toggle');

        fireEvent.click(toggleButton);

        expect(getByText('Buy milk')).toHaveStyle('textDecoration: line-through');
    });

    it('deletes a todo', () => {
        const { queryByText } = render(<TodoList />);
        const deleteButton = queryByText('Delete');

        fireEvent.click(deleteButton);

        expect(queryByText('Buy milk')).not.toBeInTheDocument();
    });
});
