import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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