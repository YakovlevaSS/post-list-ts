import { render, screen } from '@testing-library/react';

import PostItem from './PostItem';


const mockPost = {
  title: 'Test Title',
  body: 'Test Body',
};

test('PostItem renders post title and body', () => {
  render(<PostItem post={ mockPost } />);

  const titleElement = screen.getByText(mockPost.title);
  expect(titleElement).toBeInTheDocument();

  const bodyElement = screen.getByText(mockPost.body);
  expect(bodyElement).toBeInTheDocument();
});
