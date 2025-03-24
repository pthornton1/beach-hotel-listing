import React from 'react';
import { render, screen } from '@testing-library/react';
import HotelResultList from '../components/HotelResultList';

// Test needs to be async as laoding data is async
test('renders learn react link', async () => {
  
  // Arrange
  const testUrl = "https://static.onthebeach.co.uk/fe-code-test/data.json"
  
  // Act 
  render(<HotelResultList url={testUrl}/>);
  const item = await screen.findByText('Aguamarina Golf Hotel');

  // Assert 
  expect(item).toBeInTheDocument();
});
