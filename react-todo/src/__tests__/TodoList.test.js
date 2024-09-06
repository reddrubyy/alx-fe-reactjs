import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

test('renders todo list', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/learn react/i);
  expect(todoElement).toBeInTheDocument();
});

test('can toggle a todo', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/learn react/i);
  fireEvent.click(todoElement);
  expect(todoElement).toHaveStyle('text-decoration: line-through');
});

test('can delete a todo', () => {
  render(<TodoList />);
  const todoElement = screen.getByText(/learn react/i);
  const deleteButton = screen.getByText(/delete/i);
  fireEvent.click(deleteButton);
  expect(todoElement).not.toBeInTheDocument();
});

