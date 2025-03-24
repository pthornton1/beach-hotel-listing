import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelResultList from '../components/HotelResultList';

// Test needs to be async as laoding data is async
test('renders list of hotels when passed valid url', async () => {
  
  // Arrange
  // Assume this is a test url that gives back known data and is different to production
  const testUrl = "https://static.onthebeach.co.uk/fe-code-test/data.json"

  // Act 
  render(<HotelResultList url={testUrl}/>);
  const item = await screen.findByText('Aguamarina Golf Hotel');

  // Assert 
  expect(item).toBeInTheDocument();
});

test('when url is invalid, give the user an error', async () => {
  
  // Arrange
  const testUrl = ""

  // Mock the fetch to give a network error
  global.fetch = jest.fn().mockRejectedValue(new Error('Network Error'));


  // Act 
  render(<HotelResultList url={testUrl}/>);
  const item = await screen.findByText(/Error fetching hotels/i);

  // Assert 
  expect(item).toBeInTheDocument();
});



