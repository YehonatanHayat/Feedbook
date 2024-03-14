import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PostList from '../Feed/postList';

test('renders post list', () => {
  const { getByText } = render(<PostList />);
  const addPostButton = getByText('Add Post');
  expect(addPostButton).toBeInTheDocument();
});

// test('adds a new post', () => {
//   const { getByText, getByLabelText } = render(<PostList />);
//   const addPostButton = getByText('Add Post');
//   fireEvent.click(addPostButton);
//   const contentInput = getByLabelText('Enter post content');
//   const doneButton = getByText('Done');

//   fireEvent.change(contentInput, { target: { value: 'Test post content' } });
//   fireEvent.click(doneButton);

//   const newPostContent = getByText('Test post content');
//   expect(newPostContent).toBeInTheDocument();
// });


