import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarPlanetsHolder">
        <Title headline="Planetas" />
        <div className="planetsHolder">
          {planets.map((e) => (<PlanetCard
            key={ e.name }
            planetName={ e.name }
            planetImage={ e.image }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
