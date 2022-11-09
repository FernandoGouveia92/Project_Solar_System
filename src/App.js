import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

// const spaceImage = new URL('./images/background.png', import.meta.url);

class App extends React.Component {
  render() {
    return (
      <div className="SolarSystemMain">
        {/* <img className="backgroundImage" alt="OuterSpace" src={ spaceImage } /> */}
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
