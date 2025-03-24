import sortHotels from "../components/sortHotels";
import { testHotels } from "../test_helper/testHotels";
  
      describe('sortHotels function', () => {

        test('handels empty input', () => {
            const sortedHotels = sortHotels([], 'alphabetically');
            expect(sortedHotels).toEqual([]);
          }); 

        test('sorts hotels alphabetically', () => {
          const sortedHotels = sortHotels(testHotels, 'alphabetically');
          expect(sortedHotels[0].resort.name).toBe('Aguamarina Golf Hotel');
          expect(sortedHotels[1].resort.name).toBe('Iberostar Grand Salome');
          expect(sortedHotels[2].resort.name).toBe('Las Piramides Resort');
        });
      
        test('sorts hotels by price', () => {
          const sortedHotels = sortHotels(testHotels, 'price');
          expect(sortedHotels[2].bookingDetails.price.amount).toBe(1136.5);
          expect(sortedHotels[1].bookingDetails.price.amount).toBe(696.8); 
          expect(sortedHotels[0].bookingDetails.price.amount).toBe(499.99); 
        });
      
        test('sorts hotels by rating', () => {
          const sortedHotels = sortHotels(testHotels, 'rating');
          expect(sortedHotels[0].resort.starRating).toBe(5); 
          expect(sortedHotels[1].resort.starRating).toBe(4); 
          expect(sortedHotels[2].resort.starRating).toBe(3); 
        });
      
        test('returns hotels by price no sorting is specified', () => {
          const sortedHotels = sortHotels(testHotels);
          expect(sortedHotels[2].bookingDetails.price.amount).toBe(1136.5);
          expect(sortedHotels[1].bookingDetails.price.amount).toBe(696.8); 
          expect(sortedHotels[0].bookingDetails.price.amount).toBe(499.99); 
        });
      });
      