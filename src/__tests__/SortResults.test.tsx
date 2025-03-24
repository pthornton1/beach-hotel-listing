import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortResults from '../components/SortResults';

describe('SortResults component', () => {

    test('sort button highlights when active and others are white', async () => {
      // Arrange
        render(<SortResults applyUserSort={()=>{}}/>);
      // Act
      const sortPriceButton = await screen.findByRole('button', { name: /sort by price/i });
      const sortAlphabeticallyButton = await screen.findByRole('button', { name: /sort alphabetically/i });
      const sortRatingButton = await screen.findByRole('button', { name: /sort by star rating/i });
  
      fireEvent.click(sortAlphabeticallyButton);
      // Assert
      expect(sortAlphabeticallyButton).toHaveStyle('background-color: #17317F');
      expect(sortPriceButton).toHaveStyle('background-color: white');
      expect(sortRatingButton).toHaveStyle('background-color: white');
  
    });
  });