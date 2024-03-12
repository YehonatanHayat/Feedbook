import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Feed from './Feed';

describe('Feed Component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    );
    expect(screen.getByText(/Oops!/i)).toBeInTheDocument();
  });

  test('renders login link when user is not logged in', () => {
    render(
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    );
    expect(screen.getByText(/Click here to log in/i)).toBeInTheDocument();
  });

  test('renders dark mode toggler', () => {
    render(
      <MemoryRouter>
        <Feed />
      </MemoryRouter>
    );
    expect(screen.getByTestId('dark-mode-toggler')).toBeInTheDocument();
  });

  // Add more tests as needed for different scenarios
});
