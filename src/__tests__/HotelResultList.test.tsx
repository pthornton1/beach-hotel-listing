import React from 'react';
import { render, screen} from '@testing-library/react';
import HotelResultList from '../components/HotelResultList';
import { testHotels } from '../test_helper/testHotels';

afterEach(() => {
  // Clear the mock for fetch after each test to avoid side effects
  jest.restoreAllMocks();
});

describe('HotelResultList component', () => {
// Test needs to be async as laoding data is async
  test('renders list of hotels when passed valid url', async () => {
    // Arrange
    // Mock the fetch to give back data
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => testHotels,
    });
    // Act 
    render(<HotelResultList/>);
    const item = await screen.findByText('Aguamarina Golf Hotel');
    // Assert 
    expect(item).toBeInTheDocument();
  });

  test('when url is invalid, give the user an error', async () => {
    // Arrange
    // Mock the fetch to give a network error
    global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));
    // Act 
    render(<HotelResultList/>);
    const item = await screen.findByText(/Error fetching hotels/i);
    // Assert 
    expect(item).toBeInTheDocument();
  });
});


