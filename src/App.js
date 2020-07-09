import React from 'react';
import './App.css';
import Typography from '@material-ui/core/Typography';
import Restaurants from './Restaurant/Restaurants';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Burgerarchy App!</Typography>
        <hr />
        <Restaurants /> 
      </header>
    </div>
  );
}

export default App;
