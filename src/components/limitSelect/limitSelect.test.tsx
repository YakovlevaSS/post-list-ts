import { render, fireEvent } from '@testing-library/react';

import LimitSelect from './LimitSelect';


describe('LimitSelect', () => {
  test('renders properly', () => {
    const { getByRole } = render(<LimitSelect limit={ 10 } setLimit={ jest.fn() } />);

    const selectElement = getByRole('combobox');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue('10');
  });

  test('calls setLimit function with correct argument when value is changed', () => {
    const setLimitMock = jest.fn();
    const { getByRole } = render(<LimitSelect limit={ 10 } setLimit={ setLimitMock } />);

    const selectElement = getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: '20' } });

    expect(setLimitMock).toHaveBeenCalledWith(20);
  });
});
