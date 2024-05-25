import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { ALL_COURSES_TEXT } from './modules/courses/courses.constants';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(ALL_COURSES_TEXT, {exact: false});
  expect(linkElement).toBeInTheDocument();
});
