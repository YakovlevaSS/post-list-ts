import { render } from '@testing-library/react';

import ErrorComp from './ErrorComp';


describe('ErrorComp', () => {
  test('renders error message correctly', () => {
    const errorMessage = 'Test error message';
    const { getByText } = render(<ErrorComp textError={ errorMessage } />);
    expect(getByText('Что-то пошло не так,')).toBeInTheDocument();
    expect(getByText('попробуйте повторить запрос позже!')).toBeInTheDocument();
    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
