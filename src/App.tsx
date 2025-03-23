import './App.css';
import HotelResultList from './HotelResultList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
      <HotelResultList/>
    </div>
  );
}

export default App;

// To do:
// Create HotelResultList Component, States = Hotels, setHotels. UseEffect to Load data.
//  2 children: HotelResult and Sort Component
// Create interface for Hotel data
// Create HotelResult Component, state for description dropdown. Prop for hotel info
// Create Sort Component, prop with functions for sorting. State for highlighted 
// Fetch data async
// Use css classes to create look
// Add tests 