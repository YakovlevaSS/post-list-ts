import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

import BackButton from './BackButton';


jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('BackButton', () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockClear();
  });

  test('renders BackButton component', () => {
    const { getByText } = render(<BackButton />);

    const backButton = getByText('←');
    expect(backButton).toBeInTheDocument();
  });

  test('calls navigate function with correct argument when button is clicked', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const { getByRole } = render(<BackButton />);

    const button = getByRole('button');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith('/');
  });
});
