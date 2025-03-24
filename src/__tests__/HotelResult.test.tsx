import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { testHotels } from '../test_helper/testHotels';
import HotelResult from '../components/HotelResult';
import { Hotel } from '../types/types';

describe('HotelResult component', () => {

  test('Accordian is clsoed by default', async () => {
    // Arrange
    const hotel:Hotel = testHotels[0]
    // Act
    render(<HotelResult hotel={hotel}/>);
    const accordian = await screen.findByRole('button', { name: /read more about this hotel/i });

    // Assert
    expect(accordian).toHaveClass('collapsed');
  });

  test('Accordian opens and closes on click', async () => {
    // Arrange
    const hotel:Hotel = testHotels[0]

    // Act
    render(<HotelResult hotel={hotel}/>);
    const accordian = await screen.findByRole('button', { name: /read more about this hotel/i });
    fireEvent.click(accordian);

    // Assert
    expect(accordian).toHaveAttribute('aria-expanded','true');

    fireEvent.click(accordian);
    expect(accordian).toHaveAttribute('aria-expanded','false');

  });
});
