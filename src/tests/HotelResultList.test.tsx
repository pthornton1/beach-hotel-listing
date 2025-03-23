import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelResultList from '../components/HotelResultList';

test('renders learn react link', () => {
  render(<HotelResultList />);
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});
