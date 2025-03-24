import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelResultList from '../components/HotelResultList';

test('renders learn react link', async () => {
  render(<HotelResultList />);
  // const linkElement = screen.getByText('Aguamarina Golf Hotel');
  // expect(linkElement).toBeInTheDocument();
  const item = await screen.findByText('Aguamarina Golf Hotel');
  expect(item).toBeInTheDocument();
});
