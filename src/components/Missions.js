import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="solarMissions">
        <Title headline="Missões" />
        <div className="missionsHolder">
          {missions.map((e) => (<MissionCard
            key={ e.name }
            name={ e.name }
            year={ e.year }
            country={ e.country }
            destination={ e.destination }
          />))}
        </div>
      </div>
    );
  }
}

export default Missions;
