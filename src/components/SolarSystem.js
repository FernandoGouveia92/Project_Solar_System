import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((e) => (<PlanetCard
          key={ e.name }
          planetName={ e.name }
          planetImage={ e.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
