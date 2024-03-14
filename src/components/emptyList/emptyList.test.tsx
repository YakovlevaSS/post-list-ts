import { render } from '@testing-library/react';

import EmptyList from './EmptyList';


describe('EmptyList', () => {
  test('renders properly', () => {
    const { queryByText } = render(<EmptyList />);

    expect(queryByText(/Посты не найдены\./)).toBeInTheDocument();

    expect(queryByText(/Попробуйте изменить данные запроса\./)).toBeInTheDocument();
  });
});
