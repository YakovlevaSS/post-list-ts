import { render } from '@testing-library/react';

import Loader from './loader';


describe('Loader', () => {
  test('renders properly', () => {
    const { getByText } = render(<Loader />);

    expect(getByText('Загружаем информацию...')).toBeInTheDocument();
  });
});
